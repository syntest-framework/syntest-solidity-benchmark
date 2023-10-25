const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractBF0QSZE = await VBZRXWrapper.new({from: accounts[2]});
		const valueJj7eBOM = BigInt("1872")
		const valueiZ0mq3U = BigInt("567")
		const nullbXKzCk = await contractBF0QSZE.claim.call({from: accounts[2]});
		await contractBF0QSZE.deposit.call(valueJj7eBOM, {from: accounts[2]});
		await contractBF0QSZE.withdraw.call(valueiZ0mq3U, {from: accounts[4]});

		assert.equal(nullbXKzCk, 0)
		await expect(contractBF0QSZE.deposit.call(valueJj7eBOM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractiiBqPNj = await VBZRXWrapper.new({from: accounts[2]});
		const valuemYJTsLO = BigInt("1231")
		const dstgmQm9Bo = accounts[1]
		const valueOgzlpeM = BigInt("1185")
		const dstm54JQo7 = accounts[3]
		const srcLnXCa8z = accounts[1]
		const nullLjK91wq = await contractiiBqPNj.transfer.call(dstgmQm9Bo, valuemYJTsLO, {from: accounts[3]});
		const nullBi8ZDvO = await contractiiBqPNj.claim.call({from: accounts[1]});
		const nullGS1yCun = await contractiiBqPNj.claim.call({from: accounts[3]});
		await contractiiBqPNj.exit.call({from: accounts[4]});
		const nullkI8iskQ = await contractiiBqPNj.transferFrom.call(srcLnXCa8z, dstm54JQo7, valueOgzlpeM, {from: accounts[4]});

		await expect(contractiiBqPNj.transfer.call(dstgmQm9Bo, valuemYJTsLO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractogNC4eN = await VBZRXWrapper.new({from: accounts[4]});
		const valueYAlSn39 = BigInt("1209")
		const spenderQouQTp1 = accounts[2]
		const valuesZK6lbL = BigInt("496")
		const nulln1fMIlq = await contractogNC4eN.claim.call({from: accounts[0]});
		const nullNPGJY8M = await contractogNC4eN.claim.call({from: accounts[2]});
		const nulltJDPNUB = await contractogNC4eN.claim.call({from: accounts[2]});
		const nullTDjoisx = await contractogNC4eN.approve.call(spenderQouQTp1, valueYAlSn39, {from: accounts[0]});
		await contractogNC4eN.deposit.call(valuesZK6lbL, {from: accounts[4]});

		assert.equal(nullNPGJY8M, 0)
		assert.equal(nullTDjoisx, true)
		assert.equal(nulln1fMIlq, 0)
		assert.equal(nulltJDPNUB, 0)
		await expect(contractogNC4eN.deposit.call(valuesZK6lbL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractC5O0jKA = await VBZRXWrapper.new({from: accounts[1]});
		const valueOPr6Ev7 = BigInt("1781")
		const valueYgwP8a2 = BigInt("1299")
		const dstrThuiuw = accounts[2]
		const valueKteS6xr = BigInt("1144")
		const dstqcg4Y1A = accounts[4]
		const srcJ5LExuD = accounts[5]
		await contractC5O0jKA.exit.call({from: accounts[2]});
		await contractC5O0jKA.withdraw.call(valueOPr6Ev7, {from: accounts[3]});
		const nullIaJuzfY = await contractC5O0jKA.transfer.call(dstrThuiuw, valueYgwP8a2, {from: accounts[3]});
		const nullbryMluW = await contractC5O0jKA.transferFrom.call(srcJ5LExuD, dstqcg4Y1A, valueKteS6xr, {from: accounts[4]});

		await expect(contractC5O0jKA.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractX6NxC0 = await VBZRXWrapper.new({from: accounts[2]});
		const accountthjEzmt = accounts[5]
		const valuefkSjdiK = BigInt("1091")
		const dstPHf5NX = accounts[3]
		const srcIkmxKL = accounts[0]
		const valueeBVLSn6 = BigInt("456")
		const nullde0KR6 = await contractX6NxC0.claimable.call(accountthjEzmt, {from: accounts[1]});
		const nulla8QSITr = await contractX6NxC0.claim.call({from: accounts[2]});
		const nullYdq5SM0 = await contractX6NxC0.transferFrom.call(srcIkmxKL, dstPHf5NX, valuefkSjdiK, {from: accounts[5]});
		await contractX6NxC0.exit.call({from: accounts[1]});
		await contractX6NxC0.withdraw.call(valueeBVLSn6, {from: accounts[0]});

		await expect(contractX6NxC0.claimable.call(accountthjEzmt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractu2Xytq1 = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueW1nbYZK = BigInt("369")
		const spenderBEUsWth = "0x0000000000000000000000000000000000000001"
		const valueYqgRPU = BigInt("1636")
		const spenderSkHcXmN = accounts[3]
		const valueVfhoGG = BigInt("1764")
		const dstELIuA6U = "0x0000000000000000000000000000000000000001"
		const nullbRKkgqb = await contractu2Xytq1.approve.call(spenderBEUsWth, valueW1nbYZK, {from: accounts[4]});
		const nulluPuSPV1 = await contractu2Xytq1.approve.call(spenderSkHcXmN, valueYqgRPU, {from: accounts[4]});
		const nulldG14Y5r = await contractu2Xytq1.transfer.call(dstELIuA6U, valueVfhoGG, {from: "0x0000000000000000000000000000000000000001"});
	});
})