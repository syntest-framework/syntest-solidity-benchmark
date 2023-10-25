const Bank = artifacts.require("Bank");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Bank', (accounts) => {
	it('test for Bank', async () => {
		const contractfsrgqQs = await Bank.new({from: accounts[5]});
		const amountZaH3ilU = BigInt("183")
		const tokenekycRcn = accounts[1]
		const amountbkR5HMu = BigInt("448")
		const tokenZIkbatm = "0x0000000000000000000000000000000000000001"
		const amounte9PSRHe = BigInt("420")
		const tokengrMPaf5 = accounts[3]
		const borrowerajdoNDe = accounts[3]
		const borrowerZ14gGN2 = accounts[2]
		const tokenlrHbT5 = accounts[4]
		await contractfsrgqQs.withdraw.call(tokenekycRcn, amountZaH3ilU, {from: accounts[0]});
		await contractfsrgqQs.deposit.call(tokenZIkbatm, amountbkR5HMu, {from: accounts[1]});
		await contractfsrgqQs.withdraw.call(tokengrMPaf5, amounte9PSRHe, {from: accounts[2]});
		await contractfsrgqQs.addBorrower.call(borrowerajdoNDe, {from: accounts[0]});
		await contractfsrgqQs.removeBorrower.call(borrowerZ14gGN2, {from: "0x0000000000000000000000000000000000000001"});
		const balance1a6514 = await contractfsrgqQs.totalSupplyOf.call(tokenlrHbT5, {from: accounts[1]});

		await expect(contractfsrgqQs.withdraw.call(tokenekycRcn, amountZaH3ilU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contracts2bcmAZ = await Bank.new({from: accounts[4]});
		const amountqrmSTGr = BigInt("1240")
		const tokenoJ31vlQ = "0x0000000000000000000000000000000000000001"
		const borrowerWEyWpAo = accounts[2]
		const amountBFv8jPd = BigInt("395")
		const tokenHPjHr0E = accounts[4]
		await contracts2bcmAZ.repay.call(tokenoJ31vlQ, amountqrmSTGr, {from: "0x0000000000000000000000000000000000000001"});
		await contracts2bcmAZ.removeBorrower.call(borrowerWEyWpAo, {from: "0x0000000000000000000000000000000000000001"});
		await contracts2bcmAZ.borrow.call(tokenHPjHr0E, amountBFv8jPd, {from: accounts[4]});

		await expect(contracts2bcmAZ.repay.call(tokenoJ31vlQ, amountqrmSTGr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contracth6BJWws = await Bank.new({from: "0x0000000000000000000000000000000000000001"});
		const borrowerM4t6oBv = "0x0000000000000000000000000000000000000001"
		const amounto3tPCn1 = BigInt("1698")
		const tokenwiJwVAk = accounts[1]
		const borrowerFir2ZLw = accounts[0]
		await contracth6BJWws.addBorrower.call(borrowerM4t6oBv, {from: accounts[3]});
		await contracth6BJWws.withdraw.call(tokenwiJwVAk, amounto3tPCn1, {from: accounts[0]});
		await contracth6BJWws.removeBorrower.call(borrowerFir2ZLw, {from: accounts[2]});
	});

	it('test for Bank', async () => {
		const contractSZP1XJ = await Bank.new({from: accounts[2]});
		const borrowerpDfNfmj = accounts[4]
		const borrowerWVtWkOG = accounts[0]
		const borrowerbG2FXKw = accounts[3]
		const borrowerWO9QIL0 = accounts[4]
		await contractSZP1XJ.addBorrower.call(borrowerpDfNfmj, {from: accounts[2]});
		await contractSZP1XJ.removeBorrower.call(borrowerWVtWkOG, {from: accounts[1]});
		await contractSZP1XJ.addBorrower.call(borrowerbG2FXKw, {from: accounts[1]});
		await contractSZP1XJ.addBorrower.call(borrowerWO9QIL0, {from: accounts[1]});

		await expect(contractSZP1XJ.addBorrower.call(borrowerpDfNfmj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractp0hxNqC = await Bank.new({from: accounts[0]});
		const amountm4r3MJ3 = BigInt("584")
		const tokenwJUmmvw = accounts[2]
		const amountzZZqbPH = BigInt("932")
		const tokenM1CUB3x = accounts[1]
		const amountXAPeMTY = BigInt("1434")
		const whoebpkjlF = accounts[3]
		const tokenOHQQmWC = accounts[5]
		await contractp0hxNqC.withdraw.call(tokenwJUmmvw, amountm4r3MJ3, {from: accounts[0]});
		await contractp0hxNqC.borrow.call(tokenM1CUB3x, amountzZZqbPH, {from: accounts[4]});
		await contractp0hxNqC.borrowFor.call(tokenOHQQmWC, whoebpkjlF, amountXAPeMTY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractp0hxNqC.withdraw.call(tokenwJUmmvw, amountm4r3MJ3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractMnmyv4B = await Bank.new({from: accounts[2]});
		const amountijcAfLB = BigInt("431")
		const tokenJbZKwBX = accounts[0]
		const amountM8D5DhQ = BigInt("1374")
		const whoI07f2fV = accounts[1]
		const tokenzgATxoC = accounts[2]
		await contractMnmyv4B.deposit.call(tokenJbZKwBX, amountijcAfLB, {from: accounts[1]});
		await contractMnmyv4B.borrowFor.call(tokenzgATxoC, whoI07f2fV, amountM8D5DhQ, {from: accounts[5]});

		await expect(contractMnmyv4B.deposit.call(tokenJbZKwBX, amountijcAfLB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractGBDlSof = await Bank.new({from: accounts[3]});
		const borrowereNiciBu = accounts[1]
		const borrowerIOxYIy = accounts[1]
		const borrowerq7kOztq = accounts[2]
		await contractGBDlSof.removeBorrower.call(borrowereNiciBu, {from: accounts[3]});
		await contractGBDlSof.removeBorrower.call(borrowerIOxYIy, {from: accounts[4]});
		await contractGBDlSof.addBorrower.call(borrowerq7kOztq, {from: accounts[1]});

		await expect(contractGBDlSof.removeBorrower.call(borrowereNiciBu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractJ8GXIa0 = await Bank.new({from: accounts[3]});
		const tokenZeizi08 = accounts[2]
		const amountCYOeqyQ = BigInt("1227")
		const whoFMOJqzY = "0x0000000000000000000000000000000000000001"
		const tokenYIAw688 = accounts[0]
		const balancezn7fT2D = await contractJ8GXIa0.totalSupplyOf.call(tokenZeizi08, {from: accounts[4]});
		await contractJ8GXIa0.borrowFor.call(tokenYIAw688, whoFMOJqzY, amountCYOeqyQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractJ8GXIa0.totalSupplyOf.call(tokenZeizi08, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Bank', async () => {
		const contractixcvhaj = await Bank.new({from: accounts[3]});
		const tokenL2nTjPS = "0x0000000000000000000000000000000000000000"
		const amounttkwBD0C = BigInt("1227")
		const whoY1np7q4 = "0x0000000000000000000000000000000000000001"
		const tokenDhuDFQm = accounts[1]
		const balanceX5ZfjEF = await contractixcvhaj.totalSupplyOf.call(tokenL2nTjPS, {from: accounts[0]});
		await contractixcvhaj.borrowFor.call(tokenDhuDFQm, whoY1np7q4, amounttkwBD0C, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(balanceX5ZfjEF, 0)
		await expect(contractixcvhaj.borrowFor.call(tokenDhuDFQm, whoY1np7q4, amounttkwBD0C, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})