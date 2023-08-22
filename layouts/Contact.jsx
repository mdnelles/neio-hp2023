import React from 'react'
import classNames from 'clsx'
import { useForm, FormProvider } from 'react-hook-form'
import Image from 'next/image'
import ContentRenderer from '@/components/ContentRenderer'
import Reveal from '@/components/Reveal'
import FormInput from '@/components/FormInput'
import FormTextarea from '@/components/FormTextarea'
import FormSelect from '@/components/FormSelect'
import FormCheckbox from '@/components/FormCheckbox'
import FormRadio from '@/components/FormRadio'
import Button from '@/components/Button'
import { SlCheck } from 'react-icons/sl'
import { config } from '../theme.config'

const { inputs } = config.contactForm || {}

const FormComponent = {
  text: FormInput,
  textarea: FormTextarea,
  select: FormSelect,
  radio: FormRadio,
  checkbox: FormCheckbox,
}

const Contact01 = ({ main = {} }) => {
  const methods = useForm()
  const {
    register,
    formState: { errors, isValidating, isSubmitting, isSubmitSuccessful },
    handleSubmit,
    setError,
    clearErrors,
  } = methods


  React.useEffect(() => {
    if (errors.service && isValidating) {
      clearErrors('service')
    }
  }, [isValidating, errors.service, clearErrors])

  return (
    <div className="my-auto p-3 md:p-6 lg:p-12">
      <div className="prose prose-invert items-start lg:flex">
        <Reveal
          animation="fade-in slide-in-right"
          className="prose prose-invert basis-1/3 lg:mr-14"
        >
          <ContentRenderer source={main} />
        </Reveal>
        <Reveal
          animation="fade-in zoom-in"
          className="md:with-back-plate max-w-3xl border border-omega-700 md:before:bg-omega-700"
        >
           <FormProvider {...methods}>
              <div className="relative overflow-hidden shadow">
                <Image src={'/working.png'} alt="working" className="w-full h-auto ml-4" width={400} height={350}/>
                
                
              </div>
          </FormProvider> 
        </Reveal>
      </div>
    </div>
  )
}
export default Contact01
