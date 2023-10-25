const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractZZufwvs = await VBZRXWrapper.new({from: accounts[3]});
		const valuerN7Fuy7 = BigInt("748")
		const dstPLCl2i = accounts[5]
		const accountBKUlY1N = accounts[1]
		const nullg7sRp5T = await contractZZufwvs.claim.call({from: accounts[3]});
		const nullH6kvXyT = await contractZZufwvs.transfer.call(dstPLCl2i, valuerN7Fuy7, {from: accounts[2]});
		const nulla5BGxnq = await contractZZufwvs.claimable.call(accountBKUlY1N, {from: accounts[4]});
		const nulllrSGOke = await contractZZufwvs.claim.call({from: accounts[0]});

		assert.equal(nullg7sRp5T, 0)
		await expect(contractZZufwvs.transfer.call(dstPLCl2i, valuerN7Fuy7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractNgcBsKl = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueF3ngKJz = BigInt("1994")
		const dstQPnIDx4 = accounts[1]
		const srcId0QmSn = "0x0000000000000000000000000000000000000001"
		const valuendTf41G = BigInt("270")
		const nullnjtQu1v = await contractNgcBsKl.transferFrom.call(srcId0QmSn, dstQPnIDx4, valueF3ngKJz, {from: accounts[3]});
		await contractNgcBsKl.withdraw.call(valuendTf41G, {from: accounts[2]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractWAIkrRR = await VBZRXWrapper.new({from: accounts[3]});
		const accountSJ05KBv = accounts[1]
		const nullpFtoGyT = await contractWAIkrRR.claimable.call(accountSJ05KBv, {from: accounts[5]});
		const nullOxzlVgd = await contractWAIkrRR.claim.call({from: accounts[0]});
		await contractWAIkrRR.exit.call({from: accounts[0]});

		await expect(contractWAIkrRR.claimable.call(accountSJ05KBv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractvSUXh1F = await VBZRXWrapper.new({from: accounts[1]});
		const valueFsceyO0 = BigInt("1869")
		const valuemHcbEhN = BigInt("1630")
		const spenderq3u8OvE = accounts[1]
		const valueIiV3bSk = BigInt("1")
		const dstGdRVg1B = accounts[1]
		await contractvSUXh1F.deposit.call(valueFsceyO0, {from: accounts[5]});
		const nullgzssYa = await contractvSUXh1F.approve.call(spenderq3u8OvE, valuemHcbEhN, {from: accounts[0]});
		const nullWSsGQ6 = await contractvSUXh1F.transfer.call(dstGdRVg1B, valueIiV3bSk, {from: accounts[0]});

		await expect(contractvSUXh1F.deposit.call(valueFsceyO0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractSWG1j8 = await VBZRXWrapper.new({from: accounts[0]});
		const valueqcEpI9K = BigInt("1497")
		const dsttEBR3nw = accounts[4]
		const srcK694S7b = accounts[4]
		const accountS3ZzHcE = accounts[5]
		const valueyyUAiQp = BigInt("461")
		const dstVoK0aS = accounts[0]
		await contractSWG1j8.exit.call({from: accounts[1]});
		await contractSWG1j8.exit.call({from: accounts[4]});
		const nullkpr8ya = await contractSWG1j8.transferFrom.call(srcK694S7b, dsttEBR3nw, valueqcEpI9K, {from: "0x0000000000000000000000000000000000000001"});
		const nulllnXeayi = await contractSWG1j8.claimable.call(accountS3ZzHcE, {from: accounts[2]});
		const nullIUXzJxW = await contractSWG1j8.transfer.call(dstVoK0aS, valueyyUAiQp, {from: accounts[3]});

		await expect(contractSWG1j8.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractqsuptlW = await VBZRXWrapper.new({from: accounts[5]});
		const valueHmAzECo = BigInt("363")
		const spenderY1RAcIw = accounts[3]
		const accountsfMuKoI = accounts[1]
		const nullUQbWk6Z = await contractqsuptlW.approve.call(spenderY1RAcIw, valueHmAzECo, {from: accounts[3]});
		await contractqsuptlW.exit.call({from: accounts[4]});
		const nullveVPjIU = await contractqsuptlW.claimable.call(accountsfMuKoI, {from: accounts[0]});

		assert.equal(nullUQbWk6Z, true)
		await expect(contractqsuptlW.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})