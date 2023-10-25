const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractLxMltPk = await VBZRXWrapper_alt.new({from: accounts[5]});
		const accountSMsw15s = accounts[0]
		const valueKP4YaMe = BigInt("1414")
		const dstILmyUKI = accounts[5]
		const valuesWbUI4E = BigInt("1645")
		const spendergM6KqLp = accounts[1]
		const nullRj1gqsl = await contractLxMltPk.claimable.call(accountSMsw15s, {from: accounts[4]});
		const nullTDsY1Nw = await contractLxMltPk.transfer.call(dstILmyUKI, valueKP4YaMe, {from: accounts[2]});
		const nullVbq6sJN = await contractLxMltPk.approve.call(spendergM6KqLp, valuesWbUI4E, {from: accounts[0]});

		assert.equal(nullRj1gqsl, 0)
		await expect(contractLxMltPk.transfer.call(dstILmyUKI, valueKP4YaMe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractNw58NI = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueXAeoyvD = BigInt("1676")
		const accountnVWz9wE = accounts[0]
		const accountIlO2oUA = accounts[1]
		const accountfRN8Ywx = accounts[0]
		await contractNw58NI.deposit.call(valueXAeoyvD, {from: "0x0000000000000000000000000000000000000001"});
		const nullJ1cWCR = await contractNw58NI.claim.call({from: accounts[3]});
		const nullFnatpc8 = await contractNw58NI.claimable.call(accountnVWz9wE, {from: accounts[3]});
		const nulle9ZHsnw = await contractNw58NI.claimable.call(accountIlO2oUA, {from: accounts[0]});
		const nullB9Olup = await contractNw58NI.claimable.call(accountfRN8Ywx, {from: accounts[2]});

		await expect(contractNw58NI.deposit.call(valueXAeoyvD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractg8r6c1q = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuewVDAZ6m = BigInt("1339")
		const spenderQC2tGiS = accounts[4]
		const accountAol9A0z = accounts[4]
		const nullrnYB9By = await contractg8r6c1q.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullFH3Gzbr = await contractg8r6c1q.approve.call(spenderQC2tGiS, valuewVDAZ6m, {from: accounts[2]});
		const nullMppENgk = await contractg8r6c1q.claimable.call(accountAol9A0z, {from: accounts[2]});

		assert.equal(nullFH3Gzbr, true)
		assert.equal(nullMppENgk, 0)
		assert.equal(nullrnYB9By, 0)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractvQAI08o = await VBZRXWrapper_alt.new({from: accounts[2]});
		const toggleOcElWLF = false
		const addrRigLOJ3 = accounts[2]
		const valuexknACZ = BigInt("1510")
		const valuesmtOOfK = BigInt("707")
		await contractvQAI08o.setBridge.call(addrRigLOJ3, toggleOcElWLF, {from: accounts[3]});
		await contractvQAI08o.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await contractvQAI08o.withdraw.call(valuexknACZ, {from: accounts[5]});
		await contractvQAI08o.deposit.call(valuesmtOOfK, {from: accounts[0]});

		await expect(contractvQAI08o.setBridge.call(addrRigLOJ3, toggleOcElWLF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracthDy9EMr = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueA8iOERj = BigInt("72")
		await contracthDy9EMr.withdraw.call(valueA8iOERj, {from: accounts[4]});
		const nullSrIbUJQ = await contracthDy9EMr.claim.call({from: accounts[1]});
		const nullUmd8UGp = await contracthDy9EMr.claim.call({from: accounts[3]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractTsf1Hz = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valuegsV8IZu = BigInt("758")
		const spenderDUPteB = "0x0000000000000000000000000000000000000001"
		const toggleHOIvZ9k = true
		const addrFgerctA = accounts[1]
		const accountXgSaki = "0x0000000000000000000000000000000000000001"
		const nullS9aBIWy = await contractTsf1Hz.approve.call(spenderDUPteB, valuegsV8IZu, {from: accounts[3]});
		await contractTsf1Hz.setBridge.call(addrFgerctA, toggleHOIvZ9k, {from: accounts[3]});
		const nullYE5t1B = await contractTsf1Hz.claimable.call(accountXgSaki, {from: accounts[2]});

		assert.equal(nullS9aBIWy, true)
		assert.equal(nullYE5t1B, 0)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractK2NNWo5 = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueOExMZ3j = BigInt("448")
		const valueIwQvOZ4 = BigInt("1645")
		const spenderBQJZblX = accounts[1]
		const value4kb3FN = BigInt("1581")
		await contractK2NNWo5.withdraw.call(valueOExMZ3j, {from: accounts[2]});
		const nullTE2HjfC = await contractK2NNWo5.approve.call(spenderBQJZblX, valueIwQvOZ4, {from: accounts[0]});
		await contractK2NNWo5.deposit.call(value4kb3FN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractK2NNWo5.withdraw.call(valueOExMZ3j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractszh3ahd = await VBZRXWrapper_alt.new({from: accounts[0]});
		await contractszh3ahd.exit.call({from: accounts[1]});
		const nullg9vELyE = await contractszh3ahd.claim.call({from: accounts[1]});

		await expect(contractszh3ahd.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})