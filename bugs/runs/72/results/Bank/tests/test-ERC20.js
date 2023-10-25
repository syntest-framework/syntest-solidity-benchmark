const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contracteoFIgnX = await ERC20.new({from: accounts[2]});
		const ownerk0y8J2V = accounts[4]
		const nullkdGwqhS = await contracteoFIgnX.balanceOf.call(ownerk0y8J2V, {from: accounts[1]});
		const nulledAOOaU = await contracteoFIgnX.totalSupply.call({from: accounts[3]});

		assert.equal(nulledAOOaU, 0)
		assert.equal(nullkdGwqhS, 0)
	});

	it('test for ERC20', async () => {
		const contractVakAujQ = await ERC20.new({from: accounts[0]});
		const valuexKpmKsl = BigInt("1419")
		const toXYDCoe9 = accounts[4]
		const spenderYudO2sb = accounts[2]
		const ownerjbqawaz = accounts[1]
		const ownerKe42t1w = accounts[5]
		const valueClDxygc = BigInt("295")
		const toG0fmO59 = accounts[0]
		const nullTmJGgA = await contractVakAujQ.transfer.call(toXYDCoe9, valuexKpmKsl, {from: accounts[2]});
		const nullxMd5VjS = await contractVakAujQ.allowance.call(ownerjbqawaz, spenderYudO2sb, {from: accounts[1]});
		const null6gb9fR = await contractVakAujQ.balanceOf.call(ownerKe42t1w, {from: accounts[2]});
		const nullbtlrKgE = await contractVakAujQ.transfer.call(toG0fmO59, valueClDxygc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractVakAujQ.transfer.call(toXYDCoe9, valuexKpmKsl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractcsfYdey = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerLlsxbMf = accounts[3]
		const valueU2usrdb = BigInt("1581")
		const spenderlG0rNTc = accounts[3]
		const nullDxGPmSJ = await contractcsfYdey.totalSupply.call({from: accounts[2]});
		const nullk3AGRRG = await contractcsfYdey.balanceOf.call(ownerLlsxbMf, {from: accounts[1]});
		const nullZTpBRzA = await contractcsfYdey.approve.call(spenderlG0rNTc, valueU2usrdb, {from: accounts[2]});
	});

	it('test for ERC20', async () => {
		const contractZABDKSn = await ERC20.new({from: accounts[1]});
		const valueY4yMnpA = BigInt("1557")
		const spenderclNDGle = accounts[2]
		const addedValueGFjhAzp = BigInt("354")
		const spenderMysDXTP = accounts[2]
		const nullxCoHwUL = await contractZABDKSn.totalSupply.call({from: accounts[2]});
		const nullj1yLgDG = await contractZABDKSn.approve.call(spenderclNDGle, valueY4yMnpA, {from: accounts[4]});
		const nullBW7gv3K = await contractZABDKSn.increaseAllowance.call(spenderMysDXTP, addedValueGFjhAzp, {from: accounts[3]});

		assert.equal(nullBW7gv3K, true)
		assert.equal(nullj1yLgDG, true)
		assert.equal(nullxCoHwUL, 0)
	});

	it('test for ERC20', async () => {
		const contractUMigHja = await ERC20.new({from: accounts[5]});
		const spenderOvNRFMh = accounts[1]
		const ownernuVMOTl = accounts[0]
		const valuepbjeDEi = BigInt("1799")
		const toTIPpP42 = accounts[1]
		const fromkqUEkRK = accounts[3]
		const valueJxHavJw = BigInt("123")
		const spenderBEI0mbK = accounts[5]
		const valuebz3L9AZ = BigInt("1742")
		const toX9gPto6 = accounts[3]
		const fromcW3q27N = accounts[2]
		const valueiZBVUG1 = BigInt("1364")
		const spenderukDWGpq = accounts[0]
		const nullWmZQzuE = await contractUMigHja.allowance.call(ownernuVMOTl, spenderOvNRFMh, {from: accounts[0]});
		const nullNZ8iEH = await contractUMigHja.transferFrom.call(fromkqUEkRK, toTIPpP42, valuepbjeDEi, {from: accounts[4]});
		const nullGIafK0B = await contractUMigHja.approve.call(spenderBEI0mbK, valueJxHavJw, {from: accounts[0]});
		const nullougapoJ = await contractUMigHja.transferFrom.call(fromcW3q27N, toX9gPto6, valuebz3L9AZ, {from: accounts[2]});
		const nullOY7yNN2 = await contractUMigHja.approve.call(spenderukDWGpq, valueiZBVUG1, {from: accounts[2]});

		assert.equal(nullWmZQzuE, 0)
		await expect(contractUMigHja.transferFrom.call(fromkqUEkRK, toTIPpP42, valuepbjeDEi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractKP5Mdib = await ERC20.new({from: accounts[1]});
		const subtractedValueQJXJTNk = BigInt("1432")
		const spenderBqYbZvO = accounts[0]
		const valueycoeUc2 = BigInt("1996")
		const spenderr17pUTW = accounts[0]
		const ownerwALivCg = accounts[4]
		const nullhOW9Y1v = await contractKP5Mdib.decreaseAllowance.call(spenderBqYbZvO, subtractedValueQJXJTNk, {from: accounts[3]});
		const nullUEbUWim = await contractKP5Mdib.totalSupply.call({from: accounts[0]});
		const nullvGPKoiJ = await contractKP5Mdib.approve.call(spenderr17pUTW, valueycoeUc2, {from: accounts[1]});
		const nullXjUC1y = await contractKP5Mdib.balanceOf.call(ownerwALivCg, {from: accounts[2]});

		await expect(contractKP5Mdib.decreaseAllowance.call(spenderBqYbZvO, subtractedValueQJXJTNk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})