const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractQsTX4B = await VBZRXWrapper.new({from: accounts[2]});
		const valuenMWYwZl = BigInt("1677")
		const spender4EG1sX = accounts[4]
		const valueVRJJqzo = BigInt("704")
		const dstZBEE5uc = accounts[1]
		const srcHzadqH = accounts[2]
		const accountFdgWU7z = accounts[3]
		const valuewtwq3Wv = BigInt("1886")
		const spenderWMT9iAS = accounts[1]
		const valueZ0zkMIH = BigInt("1429")
		const spenderLi09HCe = accounts[0]
		const nullkVbWzWo = await contractQsTX4B.approve.call(spender4EG1sX, valuenMWYwZl, {from: accounts[5]});
		const nullWI8kMzA = await contractQsTX4B.transferFrom.call(srcHzadqH, dstZBEE5uc, valueVRJJqzo, {from: accounts[1]});
		const nullg122lI = await contractQsTX4B.claimable.call(accountFdgWU7z, {from: accounts[0]});
		const nullYn8pG3 = await contractQsTX4B.approve.call(spenderWMT9iAS, valuewtwq3Wv, {from: accounts[4]});
		const nullgolrgWF = await contractQsTX4B.approve.call(spenderLi09HCe, valueZ0zkMIH, {from: accounts[5]});

		assert.equal(nullkVbWzWo, true)
		await expect(contractQsTX4B.transferFrom.call(srcHzadqH, dstZBEE5uc, valueVRJJqzo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractb1ph17k = await VBZRXWrapper.new({from: accounts[1]});
		const valuepzhInOy = BigInt("1662")
		const valueCkBKJli = BigInt("739")
		const dstL78nax = accounts[3]
		const valueRoTX0qp = BigInt("680")
		const dstma4dNH = accounts[0]
		await contractb1ph17k.deposit.call(valuepzhInOy, {from: accounts[0]});
		const nullkHIMK2m = await contractb1ph17k.transfer.call(dstL78nax, valueCkBKJli, {from: accounts[2]});
		const nullco54KMD = await contractb1ph17k.transfer.call(dstma4dNH, valueRoTX0qp, {from: accounts[3]});

		await expect(contractb1ph17k.deposit.call(valuepzhInOy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractVj6oeV4 = await VBZRXWrapper.new({from: accounts[4]});
		const valuemubkkz = BigInt("414")
		const dstY4UiL6F = accounts[1]
		const srcTgaQpm = accounts[4]
		const nullH3ZCFMB = await contractVj6oeV4.claim.call({from: accounts[1]});
		await contractVj6oeV4.exit.call({from: accounts[4]});
		const nullINSbmtt = await contractVj6oeV4.transferFrom.call(srcTgaQpm, dstY4UiL6F, valuemubkkz, {from: accounts[0]});
		const nullsgGrG6 = await contractVj6oeV4.claim.call({from: accounts[0]});

		assert.equal(nullH3ZCFMB, 0)
		await expect(contractVj6oeV4.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractcohWpm5 = await VBZRXWrapper.new({from: accounts[4]});
		const accountcd3drM7 = "0x0000000000000000000000000000000000000001"
		const valueWTVJlvj = BigInt("648")
		const spenderXkIXJ0f = "0x0000000000000000000000000000000000000001"
		const valued3ry2Tx = BigInt("1923")
		const accountBZfEEim = accounts[0]
		const valueA4OiFNT = BigInt("1411")
		const nulllR0nHge = await contractcohWpm5.claimable.call(accountcd3drM7, {from: accounts[1]});
		const nullDODUVrp = await contractcohWpm5.approve.call(spenderXkIXJ0f, valueWTVJlvj, {from: accounts[0]});
		await contractcohWpm5.deposit.call(valued3ry2Tx, {from: accounts[1]});
		const nulldG9au3 = await contractcohWpm5.claimable.call(accountBZfEEim, {from: accounts[5]});
		await contractcohWpm5.deposit.call(valueA4OiFNT, {from: accounts[1]});
		const nullSOI7Rz5 = await contractcohWpm5.claim.call({from: accounts[1]});

		await expect(contractcohWpm5.claimable.call(accountcd3drM7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracto54dZuY = await VBZRXWrapper.new({from: accounts[5]});
		const valuekkFTFy7 = BigInt("1872")
		const dstZm8SgMG = accounts[5]
		const valuelWd4UNZ = BigInt("1555")
		const valueUy0Lqx = BigInt("534")
		const dstZXo0MlA = accounts[3]
		const valuegoK9BFf = BigInt("302")
		const valueo7F74X0 = BigInt("2001")
		const null6uUR9U = await contracto54dZuY.transfer.call(dstZm8SgMG, valuekkFTFy7, {from: accounts[1]});
		await contracto54dZuY.deposit.call(valuelWd4UNZ, {from: accounts[1]});
		const nullG5gGK6 = await contracto54dZuY.transfer.call(dstZXo0MlA, valueUy0Lqx, {from: accounts[3]});
		await contracto54dZuY.deposit.call(valuegoK9BFf, {from: accounts[2]});
		await contracto54dZuY.withdraw.call(valueo7F74X0, {from: accounts[5]});

		await expect(contracto54dZuY.transfer.call(dstZm8SgMG, valuekkFTFy7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractKet2AVT = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const accountmub1SuT = "0x0000000000000000000000000000000000000001"
		const nullrsgRhqj = await contractKet2AVT.claim.call({from: accounts[3]});
		const nullIjZ8F78 = await contractKet2AVT.claimable.call(accountmub1SuT, {from: accounts[5]});
		await contractKet2AVT.exit.call({from: accounts[3]});
	});
})