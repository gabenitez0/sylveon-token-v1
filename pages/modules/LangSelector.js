import { useRouter } from 'next/router';

export default function LangSelector() {
    const router = useRouter();

    const changeLang = (e) => {
        //console.log(e.target.value);
        router.push(router.pathname, router.pathname, {
            locale: e.target.value,
        })
    }
  return (
      <select onChange={changeLang}>
          <option value="es">es</option>
          <option value="en">en</option>
      </select>
  );
}
