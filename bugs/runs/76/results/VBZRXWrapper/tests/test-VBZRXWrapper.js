const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractFO0s19L = await VBZRXWrapper.new({from: accounts[2]});
		const accounta565NlG = accounts[3]
		const valueP9aJB4n = BigInt("149")
		const spenderCvCbKL = accounts[3]
		const valueQYMWyWT = BigInt("464")
		const nullKiLdcAz = await contractFO0s19L.claimable.call(accounta565NlG, {from: accounts[2]});
		const nullf5w0cRm = await contractFO0s19L.approve.call(spenderCvCbKL, valueP9aJB4n, {from: accounts[3]});
		await contractFO0s19L.deposit.call(valueQYMWyWT, {from: accounts[2]});

		await expect(contractFO0s19L.claimable.call(accounta565NlG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractUmmLhFh = await VBZRXWrapper.new({from: accounts[0]});
		const valueADqjIyP = BigInt("1733")
		const dstSrEkO5n = accounts[4]
		const srclFdLTAa = accounts[1]
		const valueZjT0Pqi = BigInt("1808")
		const dstz5N4r75 = accounts[3]
		const srctxilI9T = accounts[0]
		const nullor6Gt3 = await contractUmmLhFh.transferFrom.call(srclFdLTAa, dstSrEkO5n, valueADqjIyP, {from: accounts[3]});
		const nullZBEWrnC = await contractUmmLhFh.transferFrom.call(srctxilI9T, dstz5N4r75, valueZjT0Pqi, {from: accounts[4]});

		await expect(contractUmmLhFh.transferFrom.call(srclFdLTAa, dstSrEkO5n, valueADqjIyP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracttTeQyfI = await VBZRXWrapper.new({from: accounts[2]});
		const valuekq1QmUE = BigInt("35")
		const valuesltGKCj = BigInt("1309")
		await contracttTeQyfI.exit.call({from: accounts[3]});
		await contracttTeQyfI.withdraw.call(valuekq1QmUE, {from: accounts[3]});
		const nullvh9PMD = await contracttTeQyfI.claim.call({from: "0x0000000000000000000000000000000000000001"});
		await contracttTeQyfI.withdraw.call(valuesltGKCj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracttTeQyfI.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractZHMUbof = await VBZRXWrapper.new({from: accounts[3]});
		const valueYOefLQU = BigInt("2013")
		const spenderz04jNYT = accounts[1]
		const valuePxQZYwp = BigInt("113")
		const accountxvIPsDd = accounts[1]
		const valuezp58Ny0 = BigInt("1590")
		const nullQxrqoz1 = await contractZHMUbof.approve.call(spenderz04jNYT, valueYOefLQU, {from: accounts[3]});
		const nulldR8qufJ = await contractZHMUbof.claim.call({from: accounts[2]});
		await contractZHMUbof.deposit.call(valuePxQZYwp, {from: accounts[0]});
		const nulliRA4UE = await contractZHMUbof.claimable.call(accountxvIPsDd, {from: accounts[3]});
		await contractZHMUbof.deposit.call(valuezp58Ny0, {from: accounts[1]});

		assert.equal(nullQxrqoz1, true)
		assert.equal(nulldR8qufJ, 0)
		await expect(contractZHMUbof.deposit.call(valuePxQZYwp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracteTZHTWP = await VBZRXWrapper.new({from: accounts[4]});
		const valuedZzpLxE = BigInt("785")
		const dstmicp9e = accounts[1]
		const valueSFVhdiq = BigInt("480")
		const valueI2HSsu = BigInt("1489")
		const nullGqZJINT = await contracteTZHTWP.transfer.call(dstmicp9e, valuedZzpLxE, {from: accounts[2]});
		await contracteTZHTWP.exit.call({from: accounts[1]});
		await contracteTZHTWP.deposit.call(valueSFVhdiq, {from: accounts[0]});
		await contracteTZHTWP.withdraw.call(valueI2HSsu, {from: accounts[5]});

		await expect(contracteTZHTWP.transfer.call(dstmicp9e, valuedZzpLxE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracthRhhOVl = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valuezYxvCg = BigInt("1484")
		const valuekZZvqGd = BigInt("911")
		const dstLnDgNEc = accounts[3]
		const srcvIAPrU7 = accounts[3]
		const accounttfDQVTx = accounts[5]
		const valueSJzTwQR = BigInt("382")
		const spenderoIKIuc = "0x0000000000000000000000000000000000000001"
		await contracthRhhOVl.deposit.call(valuezYxvCg, {from: accounts[3]});
		const nulljCjsqo2 = await contracthRhhOVl.transferFrom.call(srcvIAPrU7, dstLnDgNEc, valuekZZvqGd, {from: accounts[2]});
		const nullBDjBlov = await contracthRhhOVl.claimable.call(accounttfDQVTx, {from: accounts[2]});
		await contracthRhhOVl.exit.call({from: accounts[3]});
		const nullY0TvYFj = await contracthRhhOVl.approve.call(spenderoIKIuc, valueSJzTwQR, {from: accounts[2]});
	});
})