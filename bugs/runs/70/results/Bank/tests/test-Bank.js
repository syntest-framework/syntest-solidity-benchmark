const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractlfTlK4 = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountewFb4MD = BigInt("521")
		const whoPy40O0T = accounts[3]
		const tokenouX0lct = accounts[2]
		const amountrRMMlGc = BigInt("232")
		const tokenPBnFmZ4 = accounts[0]
		const tokenIX3ZKYF = accounts[4]
		await contractlfTlK4.borrowFor.call(tokenouX0lct, whoPy40O0T, amountewFb4MD, {from: accounts[5]});
		await contractlfTlK4.deposit.call(tokenPBnFmZ4, amountrRMMlGc, {from: accounts[0]});
		const balanceM9Kz0fO = await contractlfTlK4.totalSupplyOf.call(tokenIX3ZKYF, {from: accounts[4]});
	});

	it('test for Bank', async () => {
		const contractqPw4ziO = await Bank.new({from: accounts[2]});
		const amountaajXrL = BigInt("14")
		const tokenPZdV8CK = accounts[2]
		const amountvWAfSMj = BigInt("801")
		const tokenQukyJsy = accounts[2]
		const borrowerd0kkx1Q = accounts[2]
		const amountOaxWPdU = BigInt("190")
		const tokendalksF9 = accounts[1]
		const amountZPQjErv = BigInt("1096")
		const tokenWCDM0Ql = accounts[2]
		await contractqPw4ziO.withdraw.call(tokenPZdV8CK, amountaajXrL, {from: accounts[5]});
		await contractqPw4ziO.borrow.call(tokenQukyJsy, amountvWAfSMj, {from: accounts[4]});
		await contractqPw4ziO.addBorrower.call(borrowerd0kkx1Q, {from: accounts[4]});
		await contractqPw4ziO.withdraw.call(tokendalksF9, amountOaxWPdU, {from: accounts[5]});
		await contractqPw4ziO.borrow.call(tokenWCDM0Ql, amountZPQjErv, {from: accounts[2]});

		await expect(contractqPw4ziO.withdraw.call(tokenPZdV8CK, amountaajXrL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractwERnxXv = await Bank.new({from: accounts[2]});
		const tokenxin7qH1 = accounts[1]
		const amountipPY3KS = BigInt("1430")
		const whoNVLIbis = accounts[3]
		const tokenGtiBwcp = accounts[2]
		const amountVEwV6La = BigInt("1674")
		const whoCYBpa97 = accounts[1]
		const tokenykOND9D = accounts[0]
		const borrowergaxS6H = accounts[3]
		const amountNC62G96 = BigInt("1018")
		const tokenzD4rCl = accounts[2]
		const balanceHK7bHQB = await contractwERnxXv.totalSupplyOf.call(tokenxin7qH1, {from: accounts[2]});
		await contractwERnxXv.borrowFor.call(tokenGtiBwcp, whoNVLIbis, amountipPY3KS, {from: "0x0000000000000000000000000000000000000001"});
		await contractwERnxXv.borrowFor.call(tokenykOND9D, whoCYBpa97, amountVEwV6La, {from: accounts[0]});
		await contractwERnxXv.removeBorrower.call(borrowergaxS6H, {from: accounts[0]});
		await contractwERnxXv.repay.call(tokenzD4rCl, amountNC62G96, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractwERnxXv.totalSupplyOf.call(tokenxin7qH1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contracta08qn65 = await Bank.new({from: accounts[4]});
		const amountU1Z9mD = BigInt("1577")
		const tokengSEMpsn = accounts[3]
		const borroweri0myYOP = accounts[2]
		const amountUdHw3Eb = BigInt("847")
		const whons6hth = accounts[2]
		const tokenzbpp92M = accounts[2]
		const amounty22W4j = BigInt("1717")
		const whooQZGZwY = "0x0000000000000000000000000000000000000001"
		const tokenBTNN6aO = accounts[3]
		const amountNYfNIWu = BigInt("506")
		const tokenrG7QqLL = accounts[3]
		const amountRTSGFz = BigInt("360")
		const tokencxxZ2zW = accounts[0]
		await contracta08qn65.repay.call(tokengSEMpsn, amountU1Z9mD, {from: accounts[4]});
		await contracta08qn65.removeBorrower.call(borroweri0myYOP, {from: accounts[0]});
		await contracta08qn65.borrowFor.call(tokenzbpp92M, whons6hth, amountUdHw3Eb, {from: accounts[0]});
		await contracta08qn65.borrowFor.call(tokenBTNN6aO, whooQZGZwY, amounty22W4j, {from: "0x0000000000000000000000000000000000000001"});
		await contracta08qn65.withdraw.call(tokenrG7QqLL, amountNYfNIWu, {from: accounts[3]});
		await contracta08qn65.borrow.call(tokencxxZ2zW, amountRTSGFz, {from: accounts[3]});

		await expect(contracta08qn65.repay.call(tokengSEMpsn, amountU1Z9mD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractBJYAeYb = await Bank.new({from: accounts[3]});
		const amountalCZdy = BigInt("1781")
		const tokenArwShYV = accounts[1]
		const borroweraRf1kPE = accounts[3]
		const amountk3QTHO = BigInt("1804")
		const tokeniU5WGrr = accounts[2]
		const amounthAorcnG = BigInt("1602")
		const whob6ylAwT = accounts[1]
		const tokena3lp8qZ = accounts[4]
		await contractBJYAeYb.withdraw.call(tokenArwShYV, amountalCZdy, {from: accounts[3]});
		await contractBJYAeYb.addBorrower.call(borroweraRf1kPE, {from: accounts[4]});
		await contractBJYAeYb.deposit.call(tokeniU5WGrr, amountk3QTHO, {from: accounts[3]});
		await contractBJYAeYb.borrowFor.call(tokena3lp8qZ, whob6ylAwT, amounthAorcnG, {from: accounts[2]});

		await expect(contractBJYAeYb.withdraw.call(tokenArwShYV, amountalCZdy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractWUw5BTy = await Bank.new({from: accounts[3]});
		const amountK0yOKM = BigInt("1710")
		const tokene5Lx6Je = accounts[3]
		const borrowerWvUh3v5 = accounts[3]
		const borrowerk5p8ObT = accounts[2]
		await contractWUw5BTy.deposit.call(tokene5Lx6Je, amountK0yOKM, {from: accounts[4]});
		await contractWUw5BTy.removeBorrower.call(borrowerWvUh3v5, {from: accounts[1]});
		await contractWUw5BTy.addBorrower.call(borrowerk5p8ObT, {from: accounts[5]});

		await expect(contractWUw5BTy.deposit.call(tokene5Lx6Je, amountK0yOKM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractiSRycLX = await Bank.new({from: accounts[4]});
		const borrowerTFSkEi = accounts[2]
		const amounti1jU16 = BigInt("212")
		const tokenvdwyjqZ = accounts[0]
		const amountzim9V2 = BigInt("754")
		const whoHOJNqNk = accounts[0]
		const tokenO4xgSNZ = accounts[1]
		const amountxQWHHkz = BigInt("1799")
		const tokenTKmc5i = accounts[3]
		const amountp8RWs5 = BigInt("1991")
		const tokentB54j4m = accounts[3]
		await contractiSRycLX.addBorrower.call(borrowerTFSkEi, {from: accounts[4]});
		await contractiSRycLX.repay.call(tokenvdwyjqZ, amounti1jU16, {from: accounts[3]});
		await contractiSRycLX.borrowFor.call(tokenO4xgSNZ, whoHOJNqNk, amountzim9V2, {from: accounts[1]});
		await contractiSRycLX.repay.call(tokenTKmc5i, amountxQWHHkz, {from: accounts[2]});
		await contractiSRycLX.deposit.call(tokentB54j4m, amountp8RWs5, {from: accounts[0]});

		await expect(contractiSRycLX.addBorrower.call(borrowerTFSkEi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractztBxUMp = await Bank.new({from: accounts[2]});
		const borrowerlZVk8zB = accounts[1]
		const tokenbOmy7zu = accounts[1]
		const amountLsgSxs = BigInt("433")
		const tokenAbOBhfv = accounts[3]
		const amountTevdgwr = BigInt("2016")
		const tokenFJpR0io = accounts[3]
		const amountae1ywf = BigInt("1430")
		const whoEQu0zsP = accounts[3]
		const tokenCmI9jsK = accounts[2]
		const amountLl03Mrw = BigInt("1674")
		const whoj9b0kD7 = accounts[1]
		const tokenSnq7pu5 = accounts[0]
		const amountZdCFTjb = BigInt("1018")
		const tokenKLFcy6X = accounts[3]
		await contractztBxUMp.removeBorrower.call(borrowerlZVk8zB, {from: accounts[2]});
		const balanceGRs0NgL = await contractztBxUMp.totalSupplyOf.call(tokenbOmy7zu, {from: accounts[2]});
		await contractztBxUMp.borrow.call(tokenAbOBhfv, amountLsgSxs, {from: accounts[3]});
		await contractztBxUMp.repay.call(tokenFJpR0io, amountTevdgwr, {from: accounts[5]});
		await contractztBxUMp.borrowFor.call(tokenCmI9jsK, whoEQu0zsP, amountae1ywf, {from: "0x0000000000000000000000000000000000000001"});
		await contractztBxUMp.borrowFor.call(tokenSnq7pu5, whoj9b0kD7, amountLl03Mrw, {from: accounts[0]});
		await contractztBxUMp.repay.call(tokenKLFcy6X, amountZdCFTjb, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractztBxUMp.removeBorrower.call(borrowerlZVk8zB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})