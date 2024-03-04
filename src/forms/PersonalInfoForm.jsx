import { useContext } from 'react';
import '@forms/PersonalInfoForm.scss';

import TextInput from '@components/TextInput.jsx';
import SelectInput from '@components/SelectInput.jsx';
import DateInput from '@components/DateInput.jsx';

import Button from '@components/Button.jsx';
import RowContainer from '@components/RowContainer.jsx';

import { PageContext } from '@context/PageContext.jsx';
import { UserContext } from '@context/UserContext.jsx';

function PersonalInfoForm() {
  const { page, setPage } = useContext(PageContext);
  const { user, setUser } = useContext(UserContext);

  function trySubmitForm() {
    for (let key in user) {
      if (!(user[key] && user[key] != '')) {
        return;
      }
    }

    setPage('evaluationFormPage');
  }

  return (
    <div className='form-wrapper'>
      <div className={'main-form'}>
        <RowContainer>
          <TextInput
            placeholder={'İsminizi girin...'}
            title={'İsim'}
            onChange={(value) => {
              setUser({ ...user, name: value });
            }}
          />
          <TextInput
            placeholder={'Soyisminizi girin...'}
            title={'Soyisim'}
            onChange={(value) => {
              setUser({ ...user, surname: value });
            }}
          />
        </RowContainer>
        <RowContainer>
          <SelectInput
            title={'Fakülte'}
            options={['Mühendislik Fakültesi', 'Tıp Fakültesi', 'Mimarlik Fakültesi', 'Edebiyat Fakültesi']}
            onChange={(value) => {
              setUser((prevUser) => ({ ...prevUser, faculty: value }));
            }}
          />
          <SelectInput
            title={'Bölüm'}
            options={['Bilgisayar Mühendisliği', 'Elektrik Elektronik Mühendisliği']}
            onChange={(value) => {
              setUser((prevUser) => ({ ...prevUser, department: value }));
            }}
          />
        </RowContainer>
        <RowContainer>
          <TextInput
            placeholder={'Ünvanınızı girin...'}
            title={'Ünvan'}
            onChange={(value) => {
              setUser({ ...user, title: value });
            }}
          />
          <RowContainer>
            <DateInput
              title={'Form Dönemi'}
              onChange={(value) => {
                setUser((prevUser) => ({ ...prevUser, semester: value }));
              }}
            />
            <DateInput
              title={'Form Tarihi'}
              onChange={(value) => {
                setUser((prevUser) => ({ ...prevUser, date: value }));
              }}
            />
          </RowContainer>
        </RowContainer>

        <div className='button-positioner'>
          <Button onClick={() => {
            trySubmitForm();
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