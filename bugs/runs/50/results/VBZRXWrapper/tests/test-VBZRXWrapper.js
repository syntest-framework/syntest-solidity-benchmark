const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractFb4mUg = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueVDcNTcY = BigInt("1009")
		const valuemJK3NKE = BigInt("157")
		const valueww3nKzb = BigInt("1624")
		const spenderaxPS3eC = accounts[1]
		const valueEJQgiNO = BigInt("1906")
		const dstrObeIT = accounts[2]
		const srcyOCJ1q1 = accounts[3]
		const valueMJsSJCb = BigInt("1495")
		await contractFb4mUg.deposit.call(valueVDcNTcY, {from: "0x0000000000000000000000000000000000000001"});
		await contractFb4mUg.withdraw.call(valuemJK3NKE, {from: accounts[2]});
		const nullpgnhHkz = await contractFb4mUg.approve.call(spenderaxPS3eC, valueww3nKzb, {from: accounts[2]});
		const nulleyVjYm0 = await contractFb4mUg.transferFrom.call(srcyOCJ1q1, dstrObeIT, valueEJQgiNO, {from: accounts[3]});
		await contractFb4mUg.exit.call({from: accounts[2]});
		await contractFb4mUg.withdraw.call(valueMJsSJCb, {from: accounts[1]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractjtmVd2U = await VBZRXWrapper.new({from: accounts[5]});
		const valuehCvMeRa = BigInt("428")
		const valueZoPSCcG = BigInt("503")
		const dstw68UqBb = accounts[0]
		const nullgfAOUhY = await contractjtmVd2U.claim.call({from: "0x0000000000000000000000000000000000000001"});
		await contractjtmVd2U.deposit.call(valuehCvMeRa, {from: accounts[4]});
		const nullNQFXwLo = await contractjtmVd2U.transfer.call(dstw68UqBb, valueZoPSCcG, {from: accounts[1]});
		const nullc3wwBu = await contractjtmVd2U.claim.call({from: accounts[4]});

		assert.equal(nullgfAOUhY, 0)
		await expect(contractjtmVd2U.deposit.call(valuehCvMeRa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractSQCkmZz = await VBZRXWrapper.new({from: accounts[2]});
		const valueZgna1KI = BigInt("560")
		const spenderdE3C3y0 = accounts[0]
		const valuefeEyoms = BigInt("399")
		const valueKQ1aORe = BigInt("1605")
		const value5hiMQn = BigInt("609")
		const nullFqXFLKm = await contractSQCkmZz.approve.call(spenderdE3C3y0, valueZgna1KI, {from: accounts[0]});
		await contractSQCkmZz.deposit.call(valuefeEyoms, {from: accounts[0]});
		await contractSQCkmZz.deposit.call(valueKQ1aORe, {from: accounts[4]});
		await contractSQCkmZz.deposit.call(value5hiMQn, {from: accounts[4]});

		assert.equal(nullFqXFLKm, true)
		await expect(contractSQCkmZz.deposit.call(valuefeEyoms, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractDphplDS = await VBZRXWrapper.new({from: accounts[1]});
		const accountvz4EqW5 = accounts[1]
		const accountJWHrcdq = accounts[2]
		const nullaKS74f1 = await contractDphplDS.claimable.call(accountvz4EqW5, {from: accounts[1]});
		const nullMcsoTLK = await contractDphplDS.claimable.call(accountJWHrcdq, {from: accounts[1]});
		const nullb3LkWdc = await contractDphplDS.claim.call({from: accounts[1]});
		const nulljuOUyOU = await contractDphplDS.claim.call({from: accounts[0]});

		await expect(contractDphplDS.claimable.call(accountvz4EqW5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractCuPC8C = await VBZRXWrapper.new({from: accounts[4]});
		const valuecJuNm0s = BigInt("100")
		const spenderyUUZJmx = accounts[2]
		const valuetSeURzh = BigInt("1453")
		const spenderZDMYSn = accounts[1]
		const accountR8XwTXR = accounts[0]
		const nullAWCcrwN = await contractCuPC8C.approve.call(spenderyUUZJmx, valuecJuNm0s, {from: accounts[1]});
		const nullltRSki = await contractCuPC8C.approve.call(spenderZDMYSn, valuetSeURzh, {from: accounts[4]});
		await contractCuPC8C.exit.call({from: accounts[1]});
		await contractCuPC8C.exit.call({from: accounts[3]});
		const nullxIOUDS5 = await contractCuPC8C.claimable.call(accountR8XwTXR, {from: accounts[1]});

		assert.equal(nullAWCcrwN, true)
		assert.equal(nullltRSki, true)
		await expect(contractCuPC8C.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractBHhLRAn = await VBZRXWrapper.new({from: accounts[4]});
		const valueLYP1R2s = BigInt("273")
		const dstr8Gs9Rx = accounts[5]
		const srcvSoOS3w = "0x0000000000000000000000000000000000000001"
		const valueo334hs1 = BigInt("253")
		const dstOZM7VnW = accounts[1]
		const srcXYgpds5 = "0x0000000000000000000000000000000000000001"
		const nullY223GP = await contractBHhLRAn.transferFrom.call(srcvSoOS3w, dstr8Gs9Rx, valueLYP1R2s, {from: accounts[4]});
		const nullyhPq1Zx = await contractBHhLRAn.transferFrom.call(srcXYgpds5, dstOZM7VnW, valueo334hs1, {from: accounts[2]});
		await contractBHhLRAn.exit.call({from: accounts[3]});

		await expect(contractBHhLRAn.transferFrom.call(srcvSoOS3w, dstr8Gs9Rx, valueLYP1R2s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractFgQnMaG = await VBZRXWrapper.new({from: accounts[0]});
		const valueb7lzdob = BigInt("707")
		const dstAqbs44k = accounts[1]
		const valueZSZqXQo = BigInt("432")
		const accountwXdz9o9 = accounts[3]
		const nullkD9rxdZ = await contractFgQnMaG.transfer.call(dstAqbs44k, valueb7lzdob, {from: accounts[1]});
		await contractFgQnMaG.deposit.call(valueZSZqXQo, {from: accounts[2]});
		const nullzzfeDm = await contractFgQnMaG.claimable.call(accountwXdz9o9, {from: accounts[2]});

		await expect(contractFgQnMaG.transfer.call(dstAqbs44k, valueb7lzdob, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})