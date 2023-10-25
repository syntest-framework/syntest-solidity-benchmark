const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractpyoljKQ = await VBZRXWrapper.new({from: accounts[4]});
		const valueRALVtfL = BigInt("1540")
		const dstKqTfnh = accounts[0]
		const accountZZz3v5X = accounts[5]
		const valueUc7h0UH = BigInt("1593")
		const dstZIpaVpG = accounts[4]
		const srcYmAqw3 = accounts[0]
		const valueOfTRnrq = BigInt("620")
		const spenderTCQOnB = accounts[4]
		const valueu27sWWC = BigInt("913")
		const nullLlPCHlP = await contractpyoljKQ.transfer.call(dstKqTfnh, valueRALVtfL, {from: accounts[3]});
		const nullm3Pgfjj = await contractpyoljKQ.claimable.call(accountZZz3v5X, {from: accounts[2]});
		const nullXKMMsZt = await contractpyoljKQ.transferFrom.call(srcYmAqw3, dstZIpaVpG, valueUc7h0UH, {from: accounts[5]});
		const nullZBdS2y6 = await contractpyoljKQ.approve.call(spenderTCQOnB, valueOfTRnrq, {from: accounts[0]});
		await contractpyoljKQ.exit.call({from: accounts[2]});
		await contractpyoljKQ.deposit.call(valueu27sWWC, {from: accounts[4]});

		await expect(contractpyoljKQ.transfer.call(dstKqTfnh, valueRALVtfL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractWuKR58n = await VBZRXWrapper.new({from: accounts[2]});
		const accountU8Ytn00 = accounts[5]
		const accountmytD4dq = accounts[4]
		const nullKDdQ2gw = await contractWuKR58n.claimable.call(accountU8Ytn00, {from: accounts[5]});
		const nullThgYd3K = await contractWuKR58n.claimable.call(accountmytD4dq, {from: accounts[0]});

		await expect(contractWuKR58n.claimable.call(accountU8Ytn00, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractZ5xOfit = await VBZRXWrapper.new({from: accounts[3]});
		const valueAOk6oeu = BigInt("932")
		const dst4l3EeJ = "0x0000000000000000000000000000000000000001"
		const valueyBTqTw = BigInt("759")
		const dstmJ4sPgN = accounts[1]
		const srcSld6s9C = accounts[1]
		const valuek8mRmf = BigInt("858")
		const spenderDESfqBi = accounts[0]
		const nullHaFiNz = await contractZ5xOfit.claim.call({from: accounts[5]});
		const nulliD4KQzP = await contractZ5xOfit.transfer.call(dst4l3EeJ, valueAOk6oeu, {from: accounts[1]});
		const nullA3TiavH = await contractZ5xOfit.transferFrom.call(srcSld6s9C, dstmJ4sPgN, valueyBTqTw, {from: accounts[0]});
		const nulljv55PX = await contractZ5xOfit.approve.call(spenderDESfqBi, valuek8mRmf, {from: accounts[3]});

		assert.equal(nullHaFiNz, 0)
		await expect(contractZ5xOfit.transfer.call(dst4l3EeJ, valueAOk6oeu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractJ40VcEp = await VBZRXWrapper.new({from: accounts[4]});
		const valueONPrl1k = BigInt("261")
		await contractJ40VcEp.deposit.call(valueONPrl1k, {from: accounts[3]});
		await contractJ40VcEp.exit.call({from: accounts[3]});

		await expect(contractJ40VcEp.deposit.call(valueONPrl1k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractuykMoyc = await VBZRXWrapper.new({from: accounts[5]});
		const valuene4bpQZ = BigInt("2028")
		const spendernbYACRr = "0x0000000000000000000000000000000000000001"
		const nullIYbj87r = await contractuykMoyc.approve.call(spendernbYACRr, valuene4bpQZ, {from: accounts[0]});
		await contractuykMoyc.exit.call({from: accounts[0]});

		assert.equal(nullIYbj87r, true)
		await expect(contractuykMoyc.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractgja8lxW = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valuerkEPhG0 = BigInt("374")
		const dstAi0Qiow = accounts[3]
		const srcYORM5yc = accounts[0]
		const accountNfqlvJX = accounts[0]
		const nullfsiahXd = await contractgja8lxW.transferFrom.call(srcYORM5yc, dstAi0Qiow, valuerkEPhG0, {from: accounts[2]});
		const nullfC5mECi = await contractgja8lxW.claimable.call(accountNfqlvJX, {from: accounts[4]});
	});
})