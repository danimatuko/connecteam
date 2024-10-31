// FooterForm.js
import React from 'react';
import InputField from './InputField';
import SelectField from './SelectField';
import RadioInput from './RadioInput';
import TextArea from './TextArea';
import Button from './Button';
import Arrow from './svg/Arrow';

const FooterForm = ({ formFields }) => {
  return (
    <form className="footer-form d-flex flex-col items-center xl:w-1/2 2xl:w-1/3">
      <div className="form-title mb-6">{formFields.title}</div>


      <div className="input-group flex flex-col md:flex-row gap-x-4">

        <InputField label={formFields.fields[0].name} />
        <InputField label={formFields.fields[1].name} />
      </div>
      <div className="input-group flex flex-col md:flex-row gap-x-4">
        <InputField label={formFields.fields[1].name} />
        <SelectField options={formFields.fields[4].options} />
      </div>

      <div className="">
        <RadioInput label={formFields.fields[4].name} options={formFields.fields[4].options} />
      </div>

      <TextArea
        label={formFields.fields[5].name}
        initialValue="" // Pass initial value if needed
        fillColor="rgba(255, 153, 0, 1)"
      />
      <Button
        text={formFields.fields[0].name}
        color="rgba(255, 153, 0, 1)"
        icon={<Arrow />}
        iconPosition="right"
        additionalClasses="w-full" // Add custom classes here
      />
    </form>
  );
};

export default FooterForm;

