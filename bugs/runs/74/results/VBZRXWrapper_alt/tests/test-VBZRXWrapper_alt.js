const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contracte3JZ9ZM = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuetTlrHq5 = BigInt("1329")
		const dstGy5nQPU = accounts[4]
		const srcAfqOpAk = accounts[0]
		const valueDSYHulc = BigInt("568")
		const nullBP9I5Tl = await contracte3JZ9ZM.transferFrom.call(srcAfqOpAk, dstGy5nQPU, valuetTlrHq5, {from: accounts[2]});
		await contracte3JZ9ZM.deposit.call(valueDSYHulc, {from: accounts[4]});

		await expect(contracte3JZ9ZM.transferFrom.call(srcAfqOpAk, dstGy5nQPU, valuetTlrHq5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractbJNj36 = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueIzkCNRK = BigInt("1636")
		const valueThA9cT9 = BigInt("1624")
		const dstHACnd3m = accounts[3]
		const src99YtSy = accounts[3]
		const nullHyfzScK = await contractbJNj36.claim.call({from: accounts[2]});
		await contractbJNj36.deposit.call(valueIzkCNRK, {from: accounts[5]});
		const nulltsAjYxD = await contractbJNj36.transferFrom.call(src99YtSy, dstHACnd3m, valueThA9cT9, {from: accounts[4]});

		assert.equal(nullHyfzScK, 0)
		await expect(contractbJNj36.deposit.call(valueIzkCNRK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractP15D6j = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueuqC1yx1 = BigInt("1454")
		const valueJRCv04c = BigInt("1984")
		const dstJRxSNJD = accounts[2]
		const srcUHASgiT = accounts[1]
		const valueKQkyYZH = BigInt("1841")
		const dstJTQYByQ = accounts[1]
		const srcMapPSDs = accounts[2]
		const valueN0a9ik = BigInt("382")
		const valueaLvMEtN = BigInt("2012")
		await contractP15D6j.deposit.call(valueuqC1yx1, {from: accounts[3]});
		const nulldtQVsZ = await contractP15D6j.transferFrom.call(srcUHASgiT, dstJRxSNJD, valueJRCv04c, {from: accounts[1]});
		const null04TRu4 = await contractP15D6j.transferFrom.call(srcMapPSDs, dstJTQYByQ, valueKQkyYZH, {from: accounts[5]});
		await contractP15D6j.withdraw.call(valueN0a9ik, {from: accounts[3]});
		await contractP15D6j.deposit.call(valueaLvMEtN, {from: accounts[4]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractwfvwQhk = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuegZbzns9 = BigInt("626")
		const values7NB9MN = BigInt("1400")
		const dstdHv7EU3 = accounts[5]
		const srcRx9k4O = "0x0000000000000000000000000000000000000001"
		await contractwfvwQhk.exit.call({from: accounts[2]});
		await contractwfvwQhk.withdraw.call(valuegZbzns9, {from: accounts[5]});
		const nullNx7SPC = await contractwfvwQhk.transferFrom.call(srcRx9k4O, dstdHv7EU3, values7NB9MN, {from: accounts[4]});
		const nullKHX5pm = await contractwfvwQhk.claim.call({from: accounts[1]});
		const nullEKaLjqr = await contractwfvwQhk.claim.call({from: accounts[3]});

		await expect(contractwfvwQhk.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract2vVL4v = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueH2vRusG = BigInt("1870")
		const spenderRsc0zE8 = accounts[5]
		const accountLmDljAz = accounts[4]
		const nullVxnJxHC = await contract2vVL4v.approve.call(spenderRsc0zE8, valueH2vRusG, {from: accounts[5]});
		const nullbGnjxVN = await contract2vVL4v.claimable.call(accountLmDljAz, {from: accounts[5]});

		assert.equal(nullVxnJxHC, true)
		assert.equal(nullbGnjxVN, 0)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractsXHxyx = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valued3Yzzd = BigInt("531")
		const spenderLmQTeef = accounts[4]
		const toggleqjmeU4Z = true
		const addrZXMyUGP = accounts[0]
		const valueLqdCzfP = BigInt("1343")
		const dstKUUZD9H = accounts[3]
		const srcBDUUbLu = accounts[4]
		const valueDnyTl0u = BigInt("212")
		const nullaoCjpLk = await contractsXHxyx.approve.call(spenderLmQTeef, valued3Yzzd, {from: "0x0000000000000000000000000000000000000001"});
		await contractsXHxyx.setBridge.call(addrZXMyUGP, toggleqjmeU4Z, {from: accounts[0]});
		const nullBQR83eP = await contractsXHxyx.transferFrom.call(srcBDUUbLu, dstKUUZD9H, valueLqdCzfP, {from: accounts[1]});
		await contractsXHxyx.deposit.call(valueDnyTl0u, {from: accounts[2]});

		assert.equal(nullaoCjpLk, true)
		await expect(contractsXHxyx.setBridge.call(addrZXMyUGP, toggleqjmeU4Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractBak8Zdj = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueJ3g0cxO = BigInt("98")
		const dstUuZm33 = accounts[0]
		const valueixUo4OS = BigInt("1909")
		const valueOQdYl0l = BigInt("236")
		const valueSg0seR = BigInt("1624")
		const dstE3QfzmR = accounts[3]
		const src4f991w = accounts[3]
		const nullbi9Q89 = await contractBak8Zdj.claim.call({from: accounts[2]});
		const nullmbCxQrj = await contractBak8Zdj.transfer.call(dstUuZm33, valueJ3g0cxO, {from: "0x0000000000000000000000000000000000000001"});
		await contractBak8Zdj.withdraw.call(valueixUo4OS, {from: accounts[1]});
		await contractBak8Zdj.deposit.call(valueOQdYl0l, {from: accounts[4]});
		const nulllkgbgvb = await contractBak8Zdj.transferFrom.call(src4f991w, dstE3QfzmR, valueSg0seR, {from: accounts[4]});

		assert.equal(nullbi9Q89, 0)
		await expect(contractBak8Zdj.transfer.call(dstUuZm33, valueJ3g0cxO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractA2WglO = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountGhG3cSv = accounts[5]
		const toggleC3wpjdU = true
		const addrq6Ol0jO = accounts[4]
		const valueU0XgkLx = BigInt("637")
		const dstKFD8Whb = accounts[2]
		const srcADq5VdB = accounts[0]
		const nulliMAG5B5 = await contractA2WglO.claimable.call(accountGhG3cSv, {from: accounts[5]});
		await contractA2WglO.setBridge.call(addrq6Ol0jO, toggleC3wpjdU, {from: accounts[2]});
		const nullIQ25dXr = await contractA2WglO.transferFrom.call(srcADq5VdB, dstKFD8Whb, valueU0XgkLx, {from: accounts[1]});

		assert.equal(nulliMAG5B5, 0)
		await expect(contractA2WglO.setBridge.call(addrq6Ol0jO, toggleC3wpjdU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractuvZBEu8 = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountYjLaAwT = "0x00000000000000000000000000000000000000-1"
		const valuepAhjQq7 = BigInt("2027")
		const nullrQljZYV = await contractuvZBEu8.claimable.call(accountYjLaAwT, {from: accounts[5]});
		await contractuvZBEu8.withdraw.call(valuepAhjQq7, {from: accounts[3]});
		await contractuvZBEu8.exit.call({from: accounts[3]});

		await expect(contractuvZBEu8.claimable.call(accountYjLaAwT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})