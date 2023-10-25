const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractlDd3kgn = await VBZRXWrapper.new({from: accounts[0]});
		const valueWCQZfht = BigInt("630")
		const dstiMoFQAO = "0x0000000000000000000000000000000000000001"
		const srck3g9Ky = accounts[2]
		const valueiEJ453h = BigInt("1465")
		const dstO3q3PzO = accounts[0]
		const nullVnPZWpo = await contractlDd3kgn.transferFrom.call(srck3g9Ky, dstiMoFQAO, valueWCQZfht, {from: accounts[4]});
		const nullmmwiWeo = await contractlDd3kgn.transfer.call(dstO3q3PzO, valueiEJ453h, {from: accounts[0]});

		await expect(contractlDd3kgn.transferFrom.call(srck3g9Ky, dstiMoFQAO, valueWCQZfht, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractC6u7Xbb = await VBZRXWrapper.new({from: accounts[2]});
		const valueX6a8OMe = BigInt("1792")
		await contractC6u7Xbb.withdraw.call(valueX6a8OMe, {from: accounts[5]});
		await contractC6u7Xbb.exit.call({from: accounts[0]});
		const nullCeDZdT3 = await contractC6u7Xbb.claim.call({from: accounts[1]});
		const nullFfTSbBQ = await contractC6u7Xbb.claim.call({from: accounts[3]});

		await expect(contractC6u7Xbb.withdraw.call(valueX6a8OMe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractJg3KliZ = await VBZRXWrapper.new({from: accounts[2]});
		const valuedXcNRZB = BigInt("886")
		const dstsTfhOCa = accounts[5]
		await contractJg3KliZ.exit.call({from: accounts[0]});
		const nullcOdFdE = await contractJg3KliZ.transfer.call(dstsTfhOCa, valuedXcNRZB, {from: accounts[4]});

		await expect(contractJg3KliZ.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractcLdWlx9 = await VBZRXWrapper.new({from: accounts[3]});
		const valuefvncgr3 = BigInt("1065")
		const dstXhKzExR = accounts[2]
		const valueH4G4lwD = BigInt("968")
		const dstd3RhhSE = accounts[1]
		const srcwZ9Kb2 = accounts[0]
		const valueh1QLN5B = BigInt("489")
		const valueW1HMGs = BigInt("1847")
		const valueia71eTj = BigInt("805")
		const dstzT5CTOA = accounts[0]
		const nullVgMW19 = await contractcLdWlx9.transfer.call(dstXhKzExR, valuefvncgr3, {from: accounts[5]});
		const nullPeEmjYl = await contractcLdWlx9.transferFrom.call(srcwZ9Kb2, dstd3RhhSE, valueH4G4lwD, {from: accounts[5]});
		await contractcLdWlx9.withdraw.call(valueh1QLN5B, {from: accounts[2]});
		await contractcLdWlx9.deposit.call(valueW1HMGs, {from: accounts[0]});
		const nullgJwE6JU = await contractcLdWlx9.transfer.call(dstzT5CTOA, valueia71eTj, {from: accounts[5]});

		await expect(contractcLdWlx9.transfer.call(dstXhKzExR, valuefvncgr3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractpkLNdNn = await VBZRXWrapper.new({from: accounts[4]});
		const valuedvT5RU = BigInt("997")
		const accountcPVqDa4 = accounts[0]
		await contractpkLNdNn.deposit.call(valuedvT5RU, {from: accounts[0]});
		const null9d2pjS = await contractpkLNdNn.claim.call({from: accounts[0]});
		const nullPjpD0UP = await contractpkLNdNn.claimable.call(accountcPVqDa4, {from: accounts[2]});
		const nullKd36Pj8 = await contractpkLNdNn.claim.call({from: accounts[0]});

		await expect(contractpkLNdNn.deposit.call(valuedvT5RU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractuCgfeWa = await VBZRXWrapper.new({from: accounts[1]});
		const valueBRQ9IKj = BigInt("1631")
		const valueE6fwTeo = BigInt("2001")
		const spendereXkQ9WZ = accounts[2]
		const nullD5c6DTx = await contractuCgfeWa.claim.call({from: accounts[0]});
		await contractuCgfeWa.deposit.call(valueBRQ9IKj, {from: accounts[1]});
		const nullZFxa8R = await contractuCgfeWa.approve.call(spendereXkQ9WZ, valueE6fwTeo, {from: accounts[3]});

		assert.equal(nullD5c6DTx, 0)
		await expect(contractuCgfeWa.deposit.call(valueBRQ9IKj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractbui0Vr = await VBZRXWrapper.new({from: accounts[4]});
		const accountYBa3BuD = accounts[0]
		const valueaNYQIWb = BigInt("909")
		const nullAV7D8Ce = await contractbui0Vr.claimable.call(accountYBa3BuD, {from: accounts[1]});
		await contractbui0Vr.deposit.call(valueaNYQIWb, {from: accounts[4]});

		await expect(contractbui0Vr.claimable.call(accountYBa3BuD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractJVrEH6D = await VBZRXWrapper.new({from: accounts[4]});
		const valuezTlcMmO = BigInt("1163")
		const spenderedq6mG7 = "0x0000000000000000000000000000000000000001"
		const nullEdokLio = await contractJVrEH6D.claim.call({from: accounts[4]});
		const nullfnrG35 = await contractJVrEH6D.approve.call(spenderedq6mG7, valuezTlcMmO, {from: accounts[1]});

		assert.equal(nullEdokLio, 0)
		assert.equal(nullfnrG35, true)
	});

	it('test for VBZRXWrapper', async () => {
		const contractbWOCDMv = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valuexb5iosR = BigInt("1230")
		const dstUpHxCnQ = accounts[3]
		const srcdbXF3ga = accounts[3]
		const valueccKCiw3 = BigInt("272")
		const dsttO9x1fR = accounts[2]
		const nullguWcEB3 = await contractbWOCDMv.transferFrom.call(srcdbXF3ga, dstUpHxCnQ, valuexb5iosR, {from: accounts[3]});
		const nullRelpHs3 = await contractbWOCDMv.claim.call({from: accounts[1]});
		const nullFGkLRp = await contractbWOCDMv.transfer.call(dsttO9x1fR, valueccKCiw3, {from: accounts[5]});
		await contractbWOCDMv.exit.call({from: accounts[4]});
	});
})