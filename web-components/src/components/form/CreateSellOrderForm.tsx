import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Field, Form, Formik, FormikErrors } from 'formik';
import { Sell2Event } from 'web-marketplace/src/lib/tracker/types';
import { useTracker } from 'web-marketplace/src/lib/tracker/useTracker';

import InfoIcon from '../icons/InfoIcon';
import AmountField from '../inputs/AmountField';
import CheckboxLabel from '../inputs/CheckboxLabel';
import NumberTextField from '../inputs/NumberTextField';
import SelectTextField, { Option } from '../inputs/SelectTextField';
import {
  requiredDenom,
  requiredMessage,
  validateAmount,
  validatePrice,
} from '../inputs/validation';
import { RegenModalProps } from '../modal';
import InfoTooltip from '../tooltip/InfoTooltip';
import { Subtitle } from '../typography';
import Submit from './Submit';

export interface CreateSellOrderProps {
  batchDenoms: Option[];
  allowedDenoms: Option[];
  sellDenom: string;
  availableAmountByBatch: { [batchDenom: string]: number };
  onSubmit: (values: FormValues) => Promise<void>;
}

interface FormProps extends CreateSellOrderProps {
  onClose: RegenModalProps['onClose'];
}

export interface FormValues {
  batchDenom?: string;
  askDenom?: string;
  price?: number;
  amount?: number;
  enableAutoRetire?: boolean;
}

const CreateSellOrderForm: React.FC<React.PropsWithChildren<FormProps>> = ({
  allowedDenoms,
  batchDenoms,
  availableAmountByBatch,
  onClose,
  onSubmit,
}) => {
  const [options, setOptions] = useState<Option[]>([]);

  const { track } = useTracker();

  const initialValues = {
    batchDenom: batchDenoms[0]?.value ?? '',
    price: undefined,
    askDenom: undefined,
    amount: undefined,
    enableAutoRetire: true,
  };

  useEffect(() => {
    setOptions(batchDenoms);
  }, [batchDenoms]);

  const validateHandler = (values: FormValues): FormikErrors<FormValues> => {
    let errors: FormikErrors<FormValues> = {};

    if (!values.batchDenom) {
      errors.batchDenom = requiredMessage;
    }
    const errAmount = validateAmount(
      availableAmountByBatch[values.batchDenom ?? ''],
      values.amount,
    );
    if (errAmount) errors.amount = errAmount;

    const errPrice = validatePrice(values.price);
    if (errPrice) errors.price = errPrice;

    if (!values.askDenom) {
      errors.askDenom = requiredDenom;
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateHandler}
      onSubmit={async values => {
        track<'sell2', Sell2Event>('sell2', {
          batchDenom: values.batchDenom,
          price: values.price,
          quantity: values.amount,
          currencyDenom: values.askDenom,
          enableAutoRetire: values.enableAutoRetire,
        });
        onSubmit(values);
      }}
    >
      {({
        values,
        errors,
        submitForm,
        isSubmitting,
        isValid,
        submitCount,
        status,
      }) => (
        <Form>
          <Field
            name="batchDenom"
            label="Batch denom"
            component={SelectTextField}
            options={options}
            disabled={options.length === 1}
            sx={{ mb: 10.5 }}
            native={false}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'end',
              mb: 0.5,
            }}
          >
            <Box
              sx={{
                width: '100%',
                mr: { xs: 0, sm: 2.4 },
                mb: { xs: 10, sm: 0 },
              }}
            >
              <Field
                component={NumberTextField}
                name="price"
                label="Price"
                arrows={false}
                errors={errors}
              />
            </Box>
            <Box sx={{ width: '100%', ml: { xs: 0, sm: 2.4 } }}>
              <Field
                name="askDenom"
                component={SelectTextField}
                options={allowedDenoms}
                errors={errors}
              />
            </Box>
          </Box>
          <AmountField
            name="amount"
            label="Amount to sell"
            availableAmount={availableAmountByBatch[values.batchDenom ?? '']}
            denom={values.batchDenom ?? ''}
          />
          <Field
            component={CheckboxLabel}
            type="checkbox"
            name="enableAutoRetire"
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Subtitle size="lg" color="primary.contrastText" sx={{ mr: 2 }}>
                  Require that credits are retired upon purchase
                </Subtitle>
                <InfoTooltip
                  title={
                    'If you uncheck this option, buyers will be able to choose to keep the credits tradable'
                  }
                  arrow
                  placement="top"
                >
                  <span>
                    <InfoIcon />
                  </span>
                </InfoTooltip>
              </Box>
            }
            sx={{ mt: 12, mr: 2 }}
          />
          <Submit
            isSubmitting={isSubmitting}
            onClose={onClose}
            status={status}
            isValid={isValid}
            submitCount={submitCount}
            submitForm={submitForm}
            label="Create Sell Order"
          />
        </Form>
      )}
    </Formik>
  );
};

export { CreateSellOrderForm };
