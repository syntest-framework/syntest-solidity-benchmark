const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractUiepKmL = await VBZRXWrapper.new({from: accounts[0]});
		const valuelfVNmc = BigInt("792")
		const valuefmlY91v = BigInt("907")
		const spenderPu9zlbc = accounts[3]
		const accountBDsP1zw = accounts[2]
		await contractUiepKmL.deposit.call(valuelfVNmc, {from: accounts[5]});
		const nullQiv4X5y = await contractUiepKmL.approve.call(spenderPu9zlbc, valuefmlY91v, {from: accounts[1]});
		const nullrkLVNMp = await contractUiepKmL.claimable.call(accountBDsP1zw, {from: accounts[3]});

		await expect(contractUiepKmL.deposit.call(valuelfVNmc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractRg4polY = await VBZRXWrapper.new({from: accounts[4]});
		const valueA6Z97dk = BigInt("1077")
		const spenderZ6HBK4z = accounts[1]
		const valueO5WStne = BigInt("544")
		const nullkJNN4Xa = await contractRg4polY.approve.call(spenderZ6HBK4z, valueA6Z97dk, {from: accounts[4]});
		const nullQWADm2E = await contractRg4polY.claim.call({from: accounts[4]});
		await contractRg4polY.deposit.call(valueO5WStne, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullQWADm2E, 0)
		assert.equal(nullkJNN4Xa, true)
		await expect(contractRg4polY.deposit.call(valueO5WStne, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractb3cGku8 = await VBZRXWrapper.new({from: accounts[2]});
		const accountN3F0rJW = accounts[3]
		const valueeLl1XyX = BigInt("521")
		const valuecED64nb = BigInt("382")
		const nullojCMbVs = await contractb3cGku8.claimable.call(accountN3F0rJW, {from: accounts[4]});
		await contractb3cGku8.deposit.call(valueeLl1XyX, {from: accounts[5]});
		await contractb3cGku8.deposit.call(valuecED64nb, {from: accounts[4]});
		await contractb3cGku8.exit.call({from: accounts[2]});

		await expect(contractb3cGku8.claimable.call(accountN3F0rJW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractpMN3Cck = await VBZRXWrapper.new({from: accounts[0]});
		const valueUfejYta = BigInt("1700")
		const dstx6vCl7x = accounts[1]
		const srcYBhjPex = accounts[3]
		const value3jcyfx = BigInt("70")
		const valueJc7a26N = BigInt("67")
		const nullcMx7mCZ = await contractpMN3Cck.claim.call({from: accounts[2]});
		const nullR7ThCrB = await contractpMN3Cck.transferFrom.call(srcYBhjPex, dstx6vCl7x, valueUfejYta, {from: accounts[2]});
		await contractpMN3Cck.deposit.call(value3jcyfx, {from: accounts[0]});
		await contractpMN3Cck.deposit.call(valueJc7a26N, {from: accounts[1]});

		assert.equal(nullcMx7mCZ, 0)
		await expect(contractpMN3Cck.transferFrom.call(srcYBhjPex, dstx6vCl7x, valueUfejYta, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractey9v6TH = await VBZRXWrapper.new({from: accounts[4]});
		const valueO6sj1aZ = BigInt("1908")
		await contractey9v6TH.exit.call({from: accounts[4]});
		await contractey9v6TH.deposit.call(valueO6sj1aZ, {from: accounts[5]});

		await expect(contractey9v6TH.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractTDbfrvQ = await VBZRXWrapper.new({from: accounts[4]});
		const valuep8194oF = BigInt("1820")
		const dstj54ZGlJ = accounts[4]
		const valuePokc1sQ = BigInt("621")
		const dstp7O3ic5 = accounts[1]
		const srcqlH6Q3E = accounts[3]
		const nulliFR6RiJ = await contractTDbfrvQ.transfer.call(dstj54ZGlJ, valuep8194oF, {from: accounts[2]});
		await contractTDbfrvQ.exit.call({from: accounts[4]});
		const nullHTQ1rAw = await contractTDbfrvQ.transferFrom.call(srcqlH6Q3E, dstp7O3ic5, valuePokc1sQ, {from: accounts[0]});

		await expect(contractTDbfrvQ.transfer.call(dstj54ZGlJ, valuep8194oF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractsu35IIe = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueIepSNY = BigInt("146")
		const dstFHTc0rM = accounts[4]
		const srcohau8S9 = accounts[3]
		const valueOizs1ni = BigInt("163")
		const valueRyrCVNS = BigInt("1098")
		const nullZwT0hvX = await contractsu35IIe.transferFrom.call(srcohau8S9, dstFHTc0rM, valueIepSNY, {from: accounts[1]});
		await contractsu35IIe.deposit.call(valueOizs1ni, {from: accounts[1]});
		await contractsu35IIe.deposit.call(valueRyrCVNS, {from: accounts[4]});
	});
})