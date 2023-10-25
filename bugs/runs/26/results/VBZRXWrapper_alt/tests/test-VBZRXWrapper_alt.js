const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractnZmZR3p = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueBDrl6Cw = BigInt("1854")
		const spendergcIPi8 = accounts[1]
		const accountOmRtAM7 = accounts[2]
		const accountKvKhm08 = accounts[5]
		const toggleaKYxDZ9 = true
		const addrWgLeemy = accounts[3]
		const nullV7upFKc = await contractnZmZR3p.approve.call(spendergcIPi8, valueBDrl6Cw, {from: accounts[1]});
		const nullq20vqOl = await contractnZmZR3p.claimable.call(accountOmRtAM7, {from: accounts[4]});
		const nullkFxjQDK = await contractnZmZR3p.claimable.call(accountKvKhm08, {from: accounts[2]});
		await contractnZmZR3p.setBridge.call(addrWgLeemy, toggleaKYxDZ9, {from: accounts[2]});

		assert.equal(nullV7upFKc, true)
		assert.equal(nullkFxjQDK, 0)
		assert.equal(nullq20vqOl, 0)
		await expect(contractnZmZR3p.setBridge.call(addrWgLeemy, toggleaKYxDZ9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractv8tiOvB = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueOjIOSFn = BigInt("1653")
		const valueY77WnA3 = BigInt("371")
		const dstDFfDswM = "0x0000000000000000000000000000000000000001"
		const srcNdQeajL = accounts[5]
		const accountdkK1Pbc = accounts[1]
		const valueK1IbDF1 = BigInt("928")
		const dstU93yyY = accounts[5]
		await contractv8tiOvB.deposit.call(valueOjIOSFn, {from: accounts[3]});
		const nullh8OKxea = await contractv8tiOvB.transferFrom.call(srcNdQeajL, dstDFfDswM, valueY77WnA3, {from: accounts[1]});
		const nullhl8ZOqx = await contractv8tiOvB.claimable.call(accountdkK1Pbc, {from: accounts[0]});
		const nullOQ8jsaS = await contractv8tiOvB.transfer.call(dstU93yyY, valueK1IbDF1, {from: accounts[5]});

		await expect(contractv8tiOvB.deposit.call(valueOjIOSFn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractXsPoR7r = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueRs6VerG = BigInt("933")
		const dstzMd9MrB = accounts[4]
		const valueY2BFBwh = BigInt("1457")
		const dstp1THbmV = accounts[3]
		const srccHXr0BO = accounts[4]
		const valuehaMcmXc = BigInt("1289")
		const dstav5qjk2 = accounts[1]
		const srcvhzK4gh = accounts[0]
		const valuehPjiCi = BigInt("1115")
		const dstnhyUdv4 = accounts[0]
		await contractXsPoR7r.exit.call({from: accounts[0]});
		const nullj9i7tGE = await contractXsPoR7r.transfer.call(dstzMd9MrB, valueRs6VerG, {from: accounts[4]});
		const nullymgDH1N = await contractXsPoR7r.transferFrom.call(srccHXr0BO, dstp1THbmV, valueY2BFBwh, {from: accounts[2]});
		const nullU59vGQs = await contractXsPoR7r.transferFrom.call(srcvhzK4gh, dstav5qjk2, valuehaMcmXc, {from: accounts[1]});
		const nullEYMnqbK = await contractXsPoR7r.transfer.call(dstnhyUdv4, valuehPjiCi, {from: accounts[3]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractq2mt0Y8 = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuecRNv15 = BigInt("1606")
		const togglecp107sS = true
		const addrm10gMsy = accounts[0]
		const accountZFP1xuF = accounts[2]
		await contractq2mt0Y8.exit.call({from: accounts[0]});
		await contractq2mt0Y8.deposit.call(valuecRNv15, {from: accounts[2]});
		await contractq2mt0Y8.setBridge.call(addrm10gMsy, togglecp107sS, {from: accounts[1]});
		const nullMJgxnqO = await contractq2mt0Y8.claimable.call(accountZFP1xuF, {from: accounts[1]});

		await expect(contractq2mt0Y8.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractTNt1OJR = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuetgoKWVl = BigInt("1452")
		const nullOC2cZba = await contractTNt1OJR.claim.call({from: accounts[3]});
		const nullXG5rNBp = await contractTNt1OJR.claim.call({from: accounts[5]});
		await contractTNt1OJR.deposit.call(valuetgoKWVl, {from: accounts[0]});

		assert.equal(nullOC2cZba, 0)
		assert.equal(nullXG5rNBp, 0)
		await expect(contractTNt1OJR.deposit.call(valuetgoKWVl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractaSGYBzY = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valuewajtdpo = BigInt("1050")
		const dstg6SGkEz = accounts[3]
		const valueODPWZwV = BigInt("776")
		const nullnyOONeS = await contractaSGYBzY.transfer.call(dstg6SGkEz, valuewajtdpo, {from: accounts[4]});
		await contractaSGYBzY.deposit.call(valueODPWZwV, {from: accounts[0]});
		const nully0WyFAt = await contractaSGYBzY.claim.call({from: accounts[1]});

		await expect(contractaSGYBzY.transfer.call(dstg6SGkEz, valuewajtdpo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractRiTCEL9 = await VBZRXWrapper_alt.new({from: accounts[1]});
		const toggleygLpu60 = false
		const addr2LpVnY = accounts[1]
		const valueuO9dGS7 = BigInt("863")
		const dstJFaxFS = accounts[4]
		const valuehqzdVuu = BigInt("914")
		await contractRiTCEL9.setBridge.call(addr2LpVnY, toggleygLpu60, {from: accounts[1]});
		const nullz0JjMPH = await contractRiTCEL9.transfer.call(dstJFaxFS, valueuO9dGS7, {from: accounts[4]});
		await contractRiTCEL9.withdraw.call(valuehqzdVuu, {from: accounts[1]});

		await expect(contractRiTCEL9.setBridge.call(addr2LpVnY, toggleygLpu60, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})