const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractuZ1SCiE = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valuejjjW4X8 = BigInt("353")
		const dstM7blzX = accounts[2]
		const valueVR5MLc = BigInt("2038")
		const spender5kgEAm = accounts[0]
		await contractuZ1SCiE.exit.call({from: accounts[4]});
		const nullPhrpMpZ = await contractuZ1SCiE.transfer.call(dstM7blzX, valuejjjW4X8, {from: accounts[4]});
		await contractuZ1SCiE.exit.call({from: accounts[3]});
		await contractuZ1SCiE.exit.call({from: accounts[2]});
		const null2CwIji = await contractuZ1SCiE.approve.call(spender5kgEAm, valueVR5MLc, {from: accounts[0]});

		await expect(contractuZ1SCiE.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractBlmSZWS = await VBZRXWrapper_alt.new({from: accounts[3]});
		const toggleqakohpF = false
		const addrGhxlXr5 = accounts[2]
		const toggleYYijM9f = false
		const addrS8G7hrO = accounts[5]
		const valueKqmWSkZ = BigInt("847")
		const spenderE1tdxHv = accounts[3]
		await contractBlmSZWS.setBridge.call(addrGhxlXr5, toggleqakohpF, {from: accounts[5]});
		await contractBlmSZWS.setBridge.call(addrS8G7hrO, toggleYYijM9f, {from: accounts[5]});
		const nullYUnyg5 = await contractBlmSZWS.approve.call(spenderE1tdxHv, valueKqmWSkZ, {from: accounts[4]});

		await expect(contractBlmSZWS.setBridge.call(addrGhxlXr5, toggleqakohpF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractQWlxiN3 = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueUfZiPJK = BigInt("52")
		const dstGMPuniC = accounts[2]
		const accountMoOGF8 = accounts[2]
		const accountuD2c7RW = accounts[0]
		const nullOnnDOFU = await contractQWlxiN3.transfer.call(dstGMPuniC, valueUfZiPJK, {from: accounts[2]});
		const nullYICwrCK = await contractQWlxiN3.claimable.call(accountMoOGF8, {from: accounts[2]});
		const null3SXuJL = await contractQWlxiN3.claimable.call(accountuD2c7RW, {from: accounts[4]});

		await expect(contractQWlxiN3.transfer.call(dstGMPuniC, valueUfZiPJK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractzizXPX8 = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valuefgpQZSh = BigInt("545")
		const spenderPBZtPAP = accounts[1]
		const valueLhXEf8S = BigInt("1868")
		const spenderFnaLjwr = accounts[1]
		const valuerlrIKwa = BigInt("220")
		const dsthlMy6aB = accounts[4]
		const valuejElKsd2 = BigInt("1690")
		const spenderAvnC23j = accounts[0]
		const nullooynBLk = await contractzizXPX8.approve.call(spenderPBZtPAP, valuefgpQZSh, {from: accounts[5]});
		const nulln1popWT = await contractzizXPX8.approve.call(spenderFnaLjwr, valueLhXEf8S, {from: accounts[0]});
		const nullFsaf92a = await contractzizXPX8.transfer.call(dsthlMy6aB, valuerlrIKwa, {from: accounts[1]});
		const nulliORx3fP = await contractzizXPX8.approve.call(spenderAvnC23j, valuejElKsd2, {from: accounts[4]});

		assert.equal(nulln1popWT, true)
		assert.equal(nullooynBLk, true)
		await expect(contractzizXPX8.transfer.call(dsthlMy6aB, valuerlrIKwa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractOq2EE6s = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueYMq6tw = BigInt("1755")
		const accountYQesP79 = accounts[0]
		const togglembr98Rm = true
		const addrfoRDJd4 = accounts[4]
		await contractOq2EE6s.deposit.call(valueYMq6tw, {from: accounts[3]});
		const nullJITRM9x = await contractOq2EE6s.claimable.call(accountYQesP79, {from: accounts[3]});
		await contractOq2EE6s.setBridge.call(addrfoRDJd4, togglembr98Rm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractOq2EE6s.deposit.call(valueYMq6tw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracth4qc8i1 = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valuenW5UBDQ = BigInt("1796")
		const dstfbsSn7X = accounts[1]
		const srcBry6aKU = accounts[3]
		const togglezR5h2ZK = false
		const addrI6S7ky = accounts[0]
		const valueanv8r95 = BigInt("525")
		const valueHKdOWBy = BigInt("792")
		const dstCEesF7K = accounts[0]
		const srcq3Y5Fqn = accounts[0]
		const nullcQw2cgX = await contracth4qc8i1.transferFrom.call(srcBry6aKU, dstfbsSn7X, valuenW5UBDQ, {from: "0x0000000000000000000000000000000000000001"});
		await contracth4qc8i1.setBridge.call(addrI6S7ky, togglezR5h2ZK, {from: accounts[4]});
		const nullO53Ibvl = await contracth4qc8i1.claim.call({from: accounts[3]});
		await contracth4qc8i1.deposit.call(valueanv8r95, {from: accounts[3]});
		const nullA09jk9x = await contracth4qc8i1.transferFrom.call(srcq3Y5Fqn, dstCEesF7K, valueHKdOWBy, {from: accounts[1]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractm2M4rKv = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountqJET5Um = accounts[0]
		const valueDQKRzQV = BigInt("1879")
		const dstD3UfpwL = accounts[2]
		const srcFtW1J6y = accounts[1]
		const togglekiYUJXn = true
		const addrvlcNB2K = "0x0000000000000000000000000000000000000001"
		const valuex9Hw5o2 = BigInt("74")
		const nullRxsuiJQ = await contractm2M4rKv.claimable.call(accountqJET5Um, {from: accounts[4]});
		await contractm2M4rKv.exit.call({from: accounts[1]});
		const nullfOqYZRG = await contractm2M4rKv.transferFrom.call(srcFtW1J6y, dstD3UfpwL, valueDQKRzQV, {from: accounts[2]});
		await contractm2M4rKv.setBridge.call(addrvlcNB2K, togglekiYUJXn, {from: accounts[3]});
		await contractm2M4rKv.withdraw.call(valuex9Hw5o2, {from: accounts[1]});

		assert.equal(nullRxsuiJQ, 0)
		await expect(contractm2M4rKv.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractXv7ni2B = await VBZRXWrapper_alt.new({from: accounts[1]});
		const togglexXOD4Ov = false
		const addrBtuopi7 = accounts[0]
		const valuenfF118v = BigInt("1932")
		const dstYo6rIJ8 = accounts[2]
		const srcIme92mS = accounts[1]
		await contractXv7ni2B.setBridge.call(addrBtuopi7, togglexXOD4Ov, {from: accounts[1]});
		await contractXv7ni2B.exit.call({from: accounts[1]});
		const nullsghs6vQ = await contractXv7ni2B.transferFrom.call(srcIme92mS, dstYo6rIJ8, valuenfF118v, {from: accounts[2]});

		await expect(contractXv7ni2B.setBridge.call(addrBtuopi7, togglexXOD4Ov, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractUCmOS3b = await VBZRXWrapper_alt.new({from: accounts[5]});
		const accountac6ECl = accounts[1]
		const valuetUyYjAh = BigInt("660")
		const dstO23fKR9 = accounts[3]
		const nullSQV163h = await contractUCmOS3b.claim.call({from: accounts[0]});
		const nullTuZljYq = await contractUCmOS3b.claimable.call(accountac6ECl, {from: accounts[0]});
		const nullaOllkUs = await contractUCmOS3b.transfer.call(dstO23fKR9, valuetUyYjAh, {from: accounts[4]});

		assert.equal(nullSQV163h, 0)
		assert.equal(nullTuZljYq, 0)
		await expect(contractUCmOS3b.transfer.call(dstO23fKR9, valuetUyYjAh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})