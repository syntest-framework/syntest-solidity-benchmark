const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractx6cpSue = await VBZRXWrapper_alt.new({from: accounts[4]});
		const toggleKoLZnb = true
		const addrbyQM91 = "0x0000000000000000000000000000000000000001"
		const valuerVP810j = BigInt("214")
		const spenderriEkMDF = accounts[4]
		const valuenVSDK4e = BigInt("1283")
		const dsteNH4lp4 = "0x0000000000000000000000000000000000000001"
		const valueMJUA0bL = BigInt("541")
		const valuewQQjlo = BigInt("1830")
		const spenderQMPK1pd = accounts[1]
		const valueNgI31zv = BigInt("1322")
		const spenderFXePEWv = accounts[1]
		await contractx6cpSue.setBridge.call(addrbyQM91, toggleKoLZnb, {from: accounts[1]});
		const nullCJc9jj7 = await contractx6cpSue.approve.call(spenderriEkMDF, valuerVP810j, {from: "0x0000000000000000000000000000000000000001"});
		const nulloWpCpX0 = await contractx6cpSue.transfer.call(dsteNH4lp4, valuenVSDK4e, {from: accounts[2]});
		await contractx6cpSue.deposit.call(valueMJUA0bL, {from: "0x0000000000000000000000000000000000000001"});
		const nulljtMtcQC = await contractx6cpSue.approve.call(spenderQMPK1pd, valuewQQjlo, {from: accounts[4]});
		const nullZ6y9kHT = await contractx6cpSue.approve.call(spenderFXePEWv, valueNgI31zv, {from: accounts[0]});

		await expect(contractx6cpSue.setBridge.call(addrbyQM91, toggleKoLZnb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractmBjYi5 = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountUx4a63d = accounts[0]
		const accountPZvTyZ = accounts[2]
		const values1ajxJ7 = BigInt("234")
		const spenderanEoUr = accounts[3]
		const toggleIcIjlQb = true
		const addryIfqHWG = accounts[1]
		const nullJZuDnh = await contractmBjYi5.claimable.call(accountUx4a63d, {from: accounts[1]});
		const nullFBzmQXm = await contractmBjYi5.claimable.call(accountPZvTyZ, {from: accounts[5]});
		await contractmBjYi5.exit.call({from: accounts[1]});
		const nullQpLME8C = await contractmBjYi5.approve.call(spenderanEoUr, values1ajxJ7, {from: accounts[2]});
		await contractmBjYi5.setBridge.call(addryIfqHWG, toggleIcIjlQb, {from: accounts[1]});

		assert.equal(nullFBzmQXm, 0)
		assert.equal(nullJZuDnh, 0)
		await expect(contractmBjYi5.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractIdZur3N = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueZMHYhpk = BigInt("1270")
		const spenderk5Sxufm = accounts[4]
		const valueaobXNZG = BigInt("1900")
		const valueVGhwdnT = BigInt("1581")
		const toggleJbqjRT = false
		const addrLPexyCn = accounts[2]
		const nullfBdlvif = await contractIdZur3N.approve.call(spenderk5Sxufm, valueZMHYhpk, {from: accounts[4]});
		await contractIdZur3N.withdraw.call(valueaobXNZG, {from: accounts[3]});
		await contractIdZur3N.deposit.call(valueVGhwdnT, {from: accounts[1]});
		await contractIdZur3N.setBridge.call(addrLPexyCn, toggleJbqjRT, {from: accounts[1]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractT44e23r = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueLMWbvy3 = BigInt("1431")
		const accountD3vN3BT = accounts[4]
		await contractT44e23r.deposit.call(valueLMWbvy3, {from: accounts[3]});
		const nullqD3AHYy = await contractT44e23r.claimable.call(accountD3vN3BT, {from: accounts[4]});
		const nullNvd5iUS = await contractT44e23r.claim.call({from: accounts[2]});

		await expect(contractT44e23r.deposit.call(valueLMWbvy3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractaspiEHz = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountTe5kcW = accounts[4]
		const nullJ1ifBMO = await contractaspiEHz.claim.call({from: accounts[0]});
		const nullD765zGp = await contractaspiEHz.claimable.call(accountTe5kcW, {from: accounts[5]});
		await contractaspiEHz.exit.call({from: accounts[5]});
		await contractaspiEHz.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullD765zGp, 0)
		assert.equal(nullJ1ifBMO, 0)
		await expect(contractaspiEHz.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractIsxk4R5 = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountnDCyZRo = accounts[1]
		const accountTAZMM3j = accounts[4]
		const valuer3OZjK = BigInt("344")
		const dstLcvgyTW = accounts[2]
		const nullrw9hIj = await contractIsxk4R5.claimable.call(accountnDCyZRo, {from: accounts[5]});
		const nullPDZE9fO = await contractIsxk4R5.claimable.call(accountTAZMM3j, {from: accounts[3]});
		const nullJ9jrdO2 = await contractIsxk4R5.transfer.call(dstLcvgyTW, valuer3OZjK, {from: accounts[3]});

		assert.equal(nullPDZE9fO, 0)
		assert.equal(nullrw9hIj, 0)
		await expect(contractIsxk4R5.transfer.call(dstLcvgyTW, valuer3OZjK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractO9tfPEa = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueFMzr8D = BigInt("423")
		const spenderv9iDAs = accounts[2]
		const nullupMcQJ2 = await contractO9tfPEa.approve.call(spenderv9iDAs, valueFMzr8D, {from: accounts[5]});
		const nullY1OBif6 = await contractO9tfPEa.claim.call({from: accounts[2]});
		await contractO9tfPEa.exit.call({from: accounts[3]});

		assert.equal(nullY1OBif6, 0)
		assert.equal(nullupMcQJ2, true)
		await expect(contractO9tfPEa.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractJqXecUJ = await VBZRXWrapper_alt.new({from: accounts[3]});
		const toggleDyP3AMF = false
		const addrxeZRFiW = accounts[2]
		const valueiq0JFX = BigInt("669")
		await contractJqXecUJ.setBridge.call(addrxeZRFiW, toggleDyP3AMF, {from: accounts[3]});
		await contractJqXecUJ.withdraw.call(valueiq0JFX, {from: accounts[1]});

		await expect(contractJqXecUJ.setBridge.call(addrxeZRFiW, toggleDyP3AMF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})