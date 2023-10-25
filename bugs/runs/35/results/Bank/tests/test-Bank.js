const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractH0fv64U = await Bank.new({from: accounts[0]});
		const amountWBv0G4 = BigInt("1487")
		const tokenEJtiDJI = accounts[5]
		const amountKjgmZx4 = BigInt("1851")
		const tokenLXeaUgV = accounts[0]
		await contractH0fv64U.deposit.call(tokenEJtiDJI, amountWBv0G4, {from: accounts[0]});
		await contractH0fv64U.repay.call(tokenLXeaUgV, amountKjgmZx4, {from: accounts[1]});

		await expect(contractH0fv64U.deposit.call(tokenEJtiDJI, amountWBv0G4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractKglXrTb = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const amountIEa5feQ = BigInt("1907")
		const tokenBaeIdW0 = accounts[1]
		const amountXZdDhIC = BigInt("632")
		const token9Yrlrd = accounts[2]
		const amountaRG8Sl = BigInt("544")
		const tokenugFOfqJ = accounts[1]
		const amounth5GqAIT = BigInt("1945")
		const token1YUpd8 = accounts[4]
		const tokenupEBqPo = accounts[0]
		await contractKglXrTb.deposit.call(tokenBaeIdW0, amountIEa5feQ, {from: accounts[1]});
		await contractKglXrTb.borrow.call(token9Yrlrd, amountXZdDhIC, {from: accounts[0]});
		await contractKglXrTb.repay.call(tokenugFOfqJ, amountaRG8Sl, {from: accounts[3]});
		await contractKglXrTb.withdraw.call(token1YUpd8, amounth5GqAIT, {from: "0x0000000000000000000000000000000000000001"});
		const balanceRWoPXay = await contractKglXrTb.totalSupplyOf.call(tokenupEBqPo, {from: accounts[2]});
	});

	it('test for Bank', async () => {
		const contractK3ul1r1 = await Bank.new({from: accounts[3]});
		const tokenz200Bgk = accounts[1]
		const amountEy1hdsn = BigInt("1603")
		const tokenY9LW3s = accounts[0]
		const amountpdgaciF = BigInt("1562")
		const tokennFMlSNX = accounts[3]
		const balancefjtBtN = await contractK3ul1r1.totalSupplyOf.call(tokenz200Bgk, {from: "0x0000000000000000000000000000000000000001"});
		await contractK3ul1r1.repay.call(tokenY9LW3s, amountEy1hdsn, {from: accounts[3]});
		await contractK3ul1r1.repay.call(tokennFMlSNX, amountpdgaciF, {from: accounts[1]});

		await expect(contractK3ul1r1.totalSupplyOf.call(tokenz200Bgk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractl7htsGB = await Bank.new({from: accounts[1]});
		const borrowereAjRZWU = accounts[2]
		const tokenFhXnihI = accounts[3]
		await contractl7htsGB.addBorrower.call(borrowereAjRZWU, {from: accounts[1]});
		const balancef6WpAyL = await contractl7htsGB.totalSupplyOf.call(tokenFhXnihI, {from: accounts[4]});

		await expect(contractl7htsGB.addBorrower.call(borrowereAjRZWU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractLpb14Zs = await Bank.new({from: accounts[0]});
		const amountNx4tLDv = BigInt("1817")
		const tokent0PET4k = accounts[0]
		await contractLpb14Zs.repay.call(tokent0PET4k, amountNx4tLDv, {from: accounts[1]});

		await expect(contractLpb14Zs.repay.call(tokent0PET4k, amountNx4tLDv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractdvu6fYX = await Bank.new({from: accounts[0]});
		const borrowerazAM3ND = accounts[3]
		const amountxae5ok = BigInt("1868")
		const tokenTVYicY = accounts[5]
		await contractdvu6fYX.removeBorrower.call(borrowerazAM3ND, {from: accounts[0]});
		await contractdvu6fYX.deposit.call(tokenTVYicY, amountxae5ok, {from: accounts[0]});

		await expect(contractdvu6fYX.removeBorrower.call(borrowerazAM3ND, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractQILuMi4 = await Bank.new({from: accounts[0]});
		const amountgV8W736 = BigInt("171")
		const tokenb057Ak7 = "0x0000000000000000000000000000000000000001"
		const amountGSqpQYz = BigInt("1138")
		const tokenLQRzWDd = accounts[4]
		const amountoTfrGzz = BigInt("1886")
		const tokenORZLJzY = accounts[6]
		await contractQILuMi4.withdraw.call(tokenb057Ak7, amountgV8W736, {from: accounts[0]});
		await contractQILuMi4.repay.call(tokenLQRzWDd, amountGSqpQYz, {from: "0x0000000000000000000000000000000000000001"});
		await contractQILuMi4.deposit.call(tokenORZLJzY, amountoTfrGzz, {from: accounts[0]});

		await expect(contractQILuMi4.withdraw.call(tokenb057Ak7, amountgV8W736, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractLIfHVA = await Bank.new({from: accounts[4]});
		const tokenA5HvIi6 = "0x0000000000000000000000000000000000000000"
		const amountcYAgKrd = BigInt("1283")
		const tokenYXJkoWT = accounts[5]
		const balancea0izkp8 = await contractLIfHVA.totalSupplyOf.call(tokenA5HvIi6, {from: accounts[1]});
		await contractLIfHVA.repay.call(tokenYXJkoWT, amountcYAgKrd, {from: accounts[3]});

		assert.equal(balancea0izkp8, 0)
		await expect(contractLIfHVA.repay.call(tokenYXJkoWT, amountcYAgKrd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})