import SafeEnvironment from "../ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "../ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "../ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Yngredh Cruz"}
        picture={"https://github.com/Yngredh.png"}
        rating={3}
        description={"São Paulo"}
      />
    </div>
  );
}
