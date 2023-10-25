const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractUXPoORF = await Bank.new({from: accounts[0]});
		const amountj2Tt7AT = BigInt("646")
		const tokenJD1si54 = accounts[1]
		const amountosLZtp8 = BigInt("1728")
		const token2sLdtp = accounts[0]
		const amountRcFMPN = BigInt("1520")
		const tokenUZNbPM = accounts[3]
		await contractUXPoORF.withdraw.call(tokenJD1si54, amountj2Tt7AT, {from: "0x0000000000000000000000000000000000000001"});
		await contractUXPoORF.repay.call(token2sLdtp, amountosLZtp8, {from: accounts[2]});
		await contractUXPoORF.withdraw.call(tokenUZNbPM, amountRcFMPN, {from: accounts[3]});

		await expect(contractUXPoORF.withdraw.call(tokenJD1si54, amountj2Tt7AT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractmJpdOcX = await Bank.new({from: accounts[3]});
		const amountXeR4jxS = BigInt("1006")
		const tokenqSn5vG = accounts[2]
		const amounthayD6Nr = BigInt("103")
		const tokenFXR5Orz = accounts[3]
		const amountisNiPro = BigInt("311")
		const tokenkYqDP3l = accounts[3]
		await contractmJpdOcX.repay.call(tokenqSn5vG, amountXeR4jxS, {from: "0x0000000000000000000000000000000000000001"});
		await contractmJpdOcX.withdraw.call(tokenFXR5Orz, amounthayD6Nr, {from: accounts[2]});
		await contractmJpdOcX.borrow.call(tokenkYqDP3l, amountisNiPro, {from: accounts[4]});

		await expect(contractmJpdOcX.repay.call(tokenqSn5vG, amountXeR4jxS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractvxyRzdc = await Bank.new({from: accounts[0]});
		const amountHghSA9V = BigInt("1037")
		const tokenk6OAnc = accounts[1]
		const amountVfzFTVR = BigInt("646")
		const tokenGsQkwK0 = accounts[1]
		const amounttydCVDt = BigInt("1728")
		const tokenc70pgE = accounts[0]
		const amountSdaVW8A = BigInt("1520")
		const tokenLV27g2l = accounts[3]
		await contractvxyRzdc.deposit.call(tokenk6OAnc, amountHghSA9V, {from: accounts[0]});
		await contractvxyRzdc.withdraw.call(tokenGsQkwK0, amountVfzFTVR, {from: "0x0000000000000000000000000000000000000001"});
		await contractvxyRzdc.repay.call(tokenc70pgE, amounttydCVDt, {from: accounts[2]});
		await contractvxyRzdc.withdraw.call(tokenLV27g2l, amountSdaVW8A, {from: accounts[3]});

		await expect(contractvxyRzdc.deposit.call(tokenk6OAnc, amountHghSA9V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractZ4NsKhv = await Bank.new({from: accounts[0]});
		const amountnkcF7XG = BigInt("1638")
		const tokenHWiIEWe = accounts[2]
		const amountubOk3i = BigInt("646")
		const tokenv150SS8 = accounts[1]
		const amountw5Mpgg3 = BigInt("1520")
		const tokenoF78j4V = accounts[3]
		await contractZ4NsKhv.withdraw.call(tokenHWiIEWe, amountnkcF7XG, {from: accounts[0]});
		await contractZ4NsKhv.withdraw.call(tokenv150SS8, amountubOk3i, {from: "0x0000000000000000000000000000000000000001"});
		await contractZ4NsKhv.withdraw.call(tokenoF78j4V, amountw5Mpgg3, {from: accounts[3]});

		await expect(contractZ4NsKhv.withdraw.call(tokenHWiIEWe, amountnkcF7XG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractzWFyEcv = await Bank.new({from: accounts[0]});
		const tokendx5VBlp = accounts[5]
		const amountBQD8uKQ = BigInt("646")
		const tokenuWZqso = accounts[2]
		const balancecfzJcpw = await contractzWFyEcv.totalSupplyOf.call(tokendx5VBlp, {from: accounts[4]});
		await contractzWFyEcv.withdraw.call(tokenuWZqso, amountBQD8uKQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractzWFyEcv.totalSupplyOf.call(tokendx5VBlp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractznJt7Sr = await Bank.new({from: accounts[0]});
		const borrowerTUJ2cXn = accounts[3]
		const borrowerbpqV95j = accounts[4]
		const amount4ycTN5 = BigInt("646")
		const tokenrUTWkql = accounts[1]
		await contractznJt7Sr.removeBorrower.call(borrowerTUJ2cXn, {from: accounts[0]});
		await contractznJt7Sr.addBorrower.call(borrowerbpqV95j, {from: accounts[4]});
		await contractznJt7Sr.withdraw.call(tokenrUTWkql, amount4ycTN5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractznJt7Sr.removeBorrower.call(borrowerTUJ2cXn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractKgNmEd2 = await Bank.new({from: accounts[0]});
		const borrowerbFeVf1i = accounts[0]
		const amountQFulMYw = BigInt("646")
		const tokenI1EBkvr = accounts[2]
		await contractKgNmEd2.addBorrower.call(borrowerbFeVf1i, {from: accounts[0]});
		await contractKgNmEd2.withdraw.call(tokenI1EBkvr, amountQFulMYw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractKgNmEd2.addBorrower.call(borrowerbFeVf1i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractLXxZX5K = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amount2gY4uE = BigInt("1381")
		const tokenkVTYkrJ = accounts[0]
		const amountvl5invX = BigInt("1042")
		const tokennPw7tV = accounts[2]
		const amountcQNZSbH = BigInt("1264")
		const whoSzzpJs8 = accounts[1]
		const tokenLirI7Tk = accounts[1]
		await contractLXxZX5K.repay.call(tokenkVTYkrJ, amount2gY4uE, {from: "0x0000000000000000000000000000000000000001"});
		await contractLXxZX5K.repay.call(tokennPw7tV, amountvl5invX, {from: accounts[0]});
		await contractLXxZX5K.borrowFor.call(tokenLirI7Tk, whoSzzpJs8, amountcQNZSbH, {from: accounts[1]});
	});

	it('test for Bank', async () => {
		const contractiThbvtO = await Bank.new({from: accounts[0]});
		const tokenZZiU0c7 = "0x0000000000000000000000000000000000000000"
		const borrower5k9itc = accounts[1]
		const amountxZeoPb = BigInt("1761")
		const tokenONbYEJl = accounts[2]
		const balanceqMkIuhx = await contractiThbvtO.totalSupplyOf.call(tokenZZiU0c7, {from: accounts[3]});
		await contractiThbvtO.addBorrower.call(borrower5k9itc, {from: "0x0000000000000000000000000000000000000001"});
		await contractiThbvtO.repay.call(tokenONbYEJl, amountxZeoPb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(balanceqMkIuhx, 0)
		await expect(contractiThbvtO.addBorrower.call(borrower5k9itc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})