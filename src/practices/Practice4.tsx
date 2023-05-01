export const Practice4 = () => {
  const calcTotalFee = (num) => {
    console.log(num * 1.1);
  };
  const onClickPractice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題: 設定ファイルを触ってみる定</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
