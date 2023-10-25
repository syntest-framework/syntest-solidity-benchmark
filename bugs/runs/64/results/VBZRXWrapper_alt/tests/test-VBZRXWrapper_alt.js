const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractzLWRO0D = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountziNqEcU = accounts[4]
		const valuerYCMYrS = BigInt("550")
		const dstRfx31Mj = accounts[2]
		const srcnSEpcmU = accounts[3]
		const valueQGzj22o = BigInt("1755")
		const dstBLlAMzC = "0x0000000000000000000000000000000000000001"
		const srcJr2UFzE = accounts[3]
		const nullWsuAgZ0 = await contractzLWRO0D.claimable.call(accountziNqEcU, {from: accounts[1]});
		const nullscWRG04 = await contractzLWRO0D.transferFrom.call(srcnSEpcmU, dstRfx31Mj, valuerYCMYrS, {from: accounts[0]});
		const nullvmmmkfl = await contractzLWRO0D.claim.call({from: accounts[4]});
		const nullvTAYf5M = await contractzLWRO0D.transferFrom.call(srcJr2UFzE, dstBLlAMzC, valueQGzj22o, {from: accounts[1]});
		const nullfxuPpeZ = await contractzLWRO0D.claim.call({from: accounts[3]});

		assert.equal(nullWsuAgZ0, 0)
		await expect(contractzLWRO0D.transferFrom.call(srcnSEpcmU, dstRfx31Mj, valuerYCMYrS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractbCRkpOR = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueb4M5DlQ = BigInt("675")
		const valueUhpukvo = BigInt("347")
		const value5Y0NvT = BigInt("1427")
		await contractbCRkpOR.exit.call({from: accounts[0]});
		await contractbCRkpOR.deposit.call(valueb4M5DlQ, {from: accounts[1]});
		await contractbCRkpOR.deposit.call(valueUhpukvo, {from: accounts[4]});
		await contractbCRkpOR.deposit.call(value5Y0NvT, {from: accounts[2]});
		await contractbCRkpOR.exit.call({from: accounts[5]});

		await expect(contractbCRkpOR.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractdodHKns = await VBZRXWrapper_alt.new({from: accounts[4]});
		const nullvYOhGQi = await contractdodHKns.claim.call({from: accounts[1]});
		const nulljDMHLkc = await contractdodHKns.claim.call({from: accounts[1]});

		assert.equal(nulljDMHLkc, 0)
		assert.equal(nullvYOhGQi, 0)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractUfeh4lp = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueRdFKRS = BigInt("1887")
		const spendervB9ahqE = accounts[2]
		await contractUfeh4lp.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const nullnxgksKc = await contractUfeh4lp.approve.call(spendervB9ahqE, valueRdFKRS, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractlmg2DB3 = await VBZRXWrapper_alt.new({from: accounts[1]});
		const togglepJTQQZ3 = false
		const addrPBStCx = accounts[0]
		const nullqGaiBpW = await contractlmg2DB3.claim.call({from: accounts[2]});
		await contractlmg2DB3.setBridge.call(addrPBStCx, togglepJTQQZ3, {from: accounts[0]});
		await contractlmg2DB3.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullqGaiBpW, 0)
		await expect(contractlmg2DB3.setBridge.call(addrPBStCx, togglepJTQQZ3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractojYhDdN = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountLD9pPZH = accounts[4]
		const valueRDbaShI = BigInt("699")
		const valuelrSkHRs = BigInt("1215")
		const spenderTmINofl = accounts[1]
		const nullXSDuwvM = await contractojYhDdN.claimable.call(accountLD9pPZH, {from: accounts[0]});
		const nulltb9oVO2 = await contractojYhDdN.claim.call({from: accounts[2]});
		await contractojYhDdN.deposit.call(valueRDbaShI, {from: accounts[0]});
		const nullSw68hhf = await contractojYhDdN.approve.call(spenderTmINofl, valuelrSkHRs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullXSDuwvM, 0)
		assert.equal(nulltb9oVO2, 0)
		await expect(contractojYhDdN.deposit.call(valueRDbaShI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractimefYvz = await VBZRXWrapper_alt.new({from: accounts[2]});
		const account0Ag4Wz = accounts[3]
		const valueMVaa21c = BigInt("35")
		const spendernWg1jX = accounts[4]
		const valuejige2w = BigInt("1480")
		const dstwUVcFbL = accounts[4]
		const srcJRa6b0C = accounts[3]
		const nullpX0g0cs = await contractimefYvz.claimable.call(account0Ag4Wz, {from: accounts[2]});
		const nullNJxNO80 = await contractimefYvz.approve.call(spendernWg1jX, valueMVaa21c, {from: "0x0000000000000000000000000000000000000001"});
		const nullUxcNq4 = await contractimefYvz.transferFrom.call(srcJRa6b0C, dstwUVcFbL, valuejige2w, {from: accounts[4]});

		assert.equal(nullNJxNO80, true)
		assert.equal(nullpX0g0cs, 0)
		await expect(contractimefYvz.transferFrom.call(srcJRa6b0C, dstwUVcFbL, valuejige2w, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractf2F4gEg = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountI67ddv = accounts[3]
		const valuelKNxCKY = BigInt("54")
		const spenderoGyG2oH = accounts[4]
		const valuejUOvvW = BigInt("359")
		const dstbU5UEPp = "0x0000000000000000000000000000000000000001"
		const valuepgNZ7D = BigInt("1004")
		const dstGeyF2bk = accounts[0]
		const srcJ3S1I3Q = accounts[3]
		const nullEtdjY9N = await contractf2F4gEg.claimable.call(accountI67ddv, {from: accounts[2]});
		const nullq3LR3fd = await contractf2F4gEg.approve.call(spenderoGyG2oH, valuelKNxCKY, {from: "0x0000000000000000000000000000000000000001"});
		const nullwCdGWEe = await contractf2F4gEg.claim.call({from: accounts[3]});
		const nullBaF6G3J = await contractf2F4gEg.transfer.call(dstbU5UEPp, valuejUOvvW, {from: accounts[1]});
		const nullo807aTt = await contractf2F4gEg.transferFrom.call(srcJ3S1I3Q, dstGeyF2bk, valuepgNZ7D, {from: accounts[1]});

		assert.equal(nullEtdjY9N, 0)
		assert.equal(nullq3LR3fd, true)
		assert.equal(nullwCdGWEe, 0)
		await expect(contractf2F4gEg.transfer.call(dstbU5UEPp, valuejUOvvW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractu2jNmi2 = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountfTH4A20 = accounts[4]
		const togglecIcFWqU = true
		const addrX3Kvn8l = accounts[0]
		const valueAB5fKs0 = BigInt("1480")
		const dstG0hy67g = accounts[4]
		const srcks9oUaN = accounts[3]
		const nullYczFRs = await contractu2jNmi2.claimable.call(accountfTH4A20, {from: accounts[2]});
		await contractu2jNmi2.setBridge.call(addrX3Kvn8l, togglecIcFWqU, {from: accounts[2]});
		const nullXEDQ1kb = await contractu2jNmi2.transferFrom.call(srcks9oUaN, dstG0hy67g, valueAB5fKs0, {from: accounts[4]});

		assert.equal(nullYczFRs, 0)
		await expect(contractu2jNmi2.setBridge.call(addrX3Kvn8l, togglecIcFWqU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})