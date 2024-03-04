import { useContext } from 'react';
import '@forms/PersonalInfoForm.scss';

import TextInput from '@components/TextInput.jsx';
import SelectInput from '@components/SelectInput.jsx';
import DateInput from '@components/DateInput.jsx';

import Button from '@components/Button.jsx';
import RowContainer from '@components/RowContainer.jsx';

import { PageContext } from '@context/PageContext.jsx';

function PersonalInfoForm() {
  const { page, setPage } = useContext(PageContext);

  return (
    <div className='form-wrapper'>
      <div className={'main-form'}>
        <RowContainer>
          <TextInput
            placeholder={'İsminizi girin...'}
            title={'İsim'}
          />
          <TextInput
            placeholder={'Soyisminizi girin...'}
            title={'Soyisim'}
          />
        </RowContainer>
        <RowContainer>
          <SelectInput
            title={'Fakülte'}
            options={['Mühendislik Fakültesi', 'Tıp Fakültesi', 'Mimarlik Fakültesi', 'Edebiyat Fakültesi']}
          />
          <SelectInput
            title={'Bölüm'}
            options={['Bilgisayar Mühendisliği', 'Elektrik Elektronik Mühendisliği']}
          />
        </RowContainer>
        <RowContainer>
          <TextInput
            placeholder={'Ünvanınızı girin...'}
            title={'Ünvan'}
          />
          <RowContainer>
            <DateInput
              title={'Form Dönemi'}
            />
            <DateInput
              title={'Form Tarihi'}
            />
          </RowContainer>
        </RowContainer>

        <div className='button-positioner'>
          <Button onClick={() => {
            setPage('evaluationFormPage');
          }}
            label={'Devam'}></Button>
        </div>
      </div>

      <div className='warning-section'>
        <p>Yanlış bilgi girilmesi durumunda değerlendirme formunun sağ üst köşesinden kişisel bilgi formuna tekrar dönüş yapabilirsiniz.</p>
        <p>Tüm bilgileri eksiksiz giriniz.</p>
      </div>
    </div>
  );
}

export default PersonalInfoForm;