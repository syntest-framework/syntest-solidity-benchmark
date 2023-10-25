const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractAtFvUw = await VBZRXWrapper.new({from: accounts[2]});
		const valuejYHe2UJ = BigInt("197")
		const dstCmzGsmJ = accounts[0]
		const valueBMG5SDw = BigInt("1875")
		await contractAtFvUw.exit.call({from: accounts[4]});
		const nullS7j5x6S = await contractAtFvUw.transfer.call(dstCmzGsmJ, valuejYHe2UJ, {from: accounts[4]});
		await contractAtFvUw.deposit.call(valueBMG5SDw, {from: accounts[0]});

		await expect(contractAtFvUw.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractkwS5ft0 = await VBZRXWrapper.new({from: accounts[5]});
		const valuerOKuVuI = BigInt("1631")
		const accountVSxnzVM = accounts[3]
		await contractkwS5ft0.deposit.call(valuerOKuVuI, {from: accounts[2]});
		const nullgZ2Pii = await contractkwS5ft0.claimable.call(accountVSxnzVM, {from: "0x0000000000000000000000000000000000000001"});
		const nullxkFOd8R = await contractkwS5ft0.claim.call({from: accounts[5]});
		const nullZfs8rcd = await contractkwS5ft0.claim.call({from: accounts[1]});

		await expect(contractkwS5ft0.deposit.call(valuerOKuVuI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractSrAjD6S = await VBZRXWrapper.new({from: accounts[3]});
		const accountQ5sxSDp = accounts[2]
		const accountjEenNMV = accounts[4]
		const valueV6Cgb3 = BigInt("1806")
		const spenderjc3Cr7O = accounts[0]
		const valueWqOx4XL = BigInt("604")
		const nulloFcIZ5 = await contractSrAjD6S.claim.call({from: accounts[4]});
		await contractSrAjD6S.exit.call({from: accounts[3]});
		const nullhmFTvfm = await contractSrAjD6S.claimable.call(accountQ5sxSDp, {from: "0x0000000000000000000000000000000000000001"});
		const nullTjOHg7H = await contractSrAjD6S.claimable.call(accountjEenNMV, {from: accounts[3]});
		const nullrZHKWxW = await contractSrAjD6S.approve.call(spenderjc3Cr7O, valueV6Cgb3, {from: accounts[1]});
		await contractSrAjD6S.deposit.call(valueWqOx4XL, {from: accounts[3]});

		assert.equal(nulloFcIZ5, 0)
		await expect(contractSrAjD6S.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractgOjlbSc = await VBZRXWrapper.new({from: accounts[4]});
		const accountY5LDuFY = accounts[1]
		const accountZFllfHA = accounts[2]
		const nulle6SHeWn = await contractgOjlbSc.claimable.call(accountY5LDuFY, {from: accounts[4]});
		const nullnTaMils = await contractgOjlbSc.claimable.call(accountZFllfHA, {from: accounts[1]});
		await contractgOjlbSc.exit.call({from: accounts[0]});
		await contractgOjlbSc.exit.call({from: accounts[1]});
		await contractgOjlbSc.exit.call({from: accounts[2]});

		await expect(contractgOjlbSc.claimable.call(accountY5LDuFY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractUoLUN6 = await VBZRXWrapper.new({from: accounts[4]});
		const valuec2ebYtB = BigInt("1103")
		const dstGR86fk = accounts[3]
		const srcNXPt53C = accounts[3]
		const valueW5Q9SDx = BigInt("234")
		const spenderDfF5z1 = accounts[3]
		const valuewMhflqp = BigInt("1604")
		const spenderhhcF6T = accounts[1]
		const valueCWGs5fu = BigInt("1439")
		const null9OpqhK = await contractUoLUN6.transferFrom.call(srcNXPt53C, dstGR86fk, valuec2ebYtB, {from: accounts[1]});
		const nullq02u5lm = await contractUoLUN6.approve.call(spenderDfF5z1, valueW5Q9SDx, {from: accounts[4]});
		await contractUoLUN6.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullGyPbclr = await contractUoLUN6.approve.call(spenderhhcF6T, valuewMhflqp, {from: accounts[1]});
		await contractUoLUN6.withdraw.call(valueCWGs5fu, {from: accounts[0]});

		await expect(contractUoLUN6.transferFrom.call(srcNXPt53C, dstGR86fk, valuec2ebYtB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractS6dvKFi = await VBZRXWrapper.new({from: accounts[1]});
		const valuePsum61y = BigInt("169")
		const spenderAkcZvcq = accounts[0]
		const nullER0tXgp = await contractS6dvKFi.claim.call({from: accounts[4]});
		const nullWqNoVy4 = await contractS6dvKFi.claim.call({from: accounts[1]});
		const nullsbyFSrN = await contractS6dvKFi.approve.call(spenderAkcZvcq, valuePsum61y, {from: accounts[3]});

		assert.equal(nullER0tXgp, 0)
		assert.equal(nullWqNoVy4, 0)
		assert.equal(nullsbyFSrN, true)
	});

	it('test for VBZRXWrapper', async () => {
		const contractN0YSGQ = await VBZRXWrapper.new({from: accounts[1]});
		const valueEoQ8JPp = BigInt("188")
		const dstKzSV2GA = accounts[1]
		const accountEhWfYDt = accounts[2]
		const nullDarX2TV = await contractN0YSGQ.claim.call({from: accounts[4]});
		const nullX3umgw = await contractN0YSGQ.transfer.call(dstKzSV2GA, valueEoQ8JPp, {from: accounts[5]});
		const nullVubeXcr = await contractN0YSGQ.claimable.call(accountEhWfYDt, {from: accounts[0]});
		await contractN0YSGQ.exit.call({from: accounts[3]});

		assert.equal(nullDarX2TV, 0)
		await expect(contractN0YSGQ.transfer.call(dstKzSV2GA, valueEoQ8JPp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contract97xoWy = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueZwR88E = BigInt("1140")
		const valuexbuhEJx = BigInt("401")
		await contract97xoWy.exit.call({from: accounts[3]});
		await contract97xoWy.withdraw.call(valueZwR88E, {from: accounts[4]});
		await contract97xoWy.withdraw.call(valuexbuhEJx, {from: "0x0000000000000000000000000000000000000001"});
	});
})