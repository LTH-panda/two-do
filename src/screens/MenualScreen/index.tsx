import { Back, Header, Title } from "components/@modules";
import Layout from "components/Layout";
import React from "react";

function MenualScreen() {
  return (
    <Layout screenTheme="android">
      <Header right={<Back theme="close" />} />
      <div className="gap-4 px-8 layout">
        <Title title="어떻게 사용하나요?" />
        <article className="flex flex-col gap-8">
          <div className="text-lg">
            <h2 className="pb-3 text-xl font-primary text-sky-500">
              &quot;할 일은 많은데 뭐부터 해야하지...?&quot;
            </h2>
            <span className="font-primary">Two do</span>는{" "}
            <span className="text-sky-500">
              해야할 일 들의 순서를 쉽게 정할 수 있도록
            </span>{" "}
            도와드릴거에요!! <br />
            도움을 통해, 목표를 달성해보세요!
          </div>
          <div>
            <ul className="flex flex-col justify-center gap-4 p-8 text-xl bg-gray-100 shadow-md font-primary rounded-2xl">
              <h1 className="pb-4 text-2xl">이렇게 시작해보세요!</h1>
              <li>1. 시간을 정하세요!</li>
              <li>2. 할 일을 입력하세요!</li>
              <li>3. 할일을 두 개씩 보여드릴게요!</li>
              <li>4. 마음에 드는 할 일부터 하나 씩 완료해보세요!</li>
            </ul>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export default MenualScreen;
