const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsUoNnliM = await UFragments.new({from: accounts[4]});
		const intQ8oHw9N = BigInt("310")
		const intmDpbvz5 = BigInt("-151")
//		const int256S8Ara1 = await UFragmentsUoNnliM.sub.call(intmDpbvz5, intQ8oHw9N, {from: accounts[4]});
//		const uint256F9fIvn8 = await UFragmentsUoNnliM.calRebase.call({from: accounts[0]});
//		const uint8IXlUof = await UFragmentsUoNnliM.decimals.call({from: accounts[5]});

		await expect(UFragmentsUoNnliM.sub.call(intmDpbvz5, intQ8oHw9N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsh0VaGq3 = await UFragments.new({from: accounts[1]});
		const intoforE8L = BigInt("-976")
		const intXDMwOsb = BigInt("1783")
		const addressUEOibt = await UFragmentsh0VaGq3.owner.call({from: accounts[4]});
		const boolQt5uvfC = await UFragmentsh0VaGq3.isOwner.call({from: accounts[4]});
//		const int256ibG5swj = await UFragmentsh0VaGq3.mul.call(intXDMwOsb, intoforE8L, {from: accounts[0]});

		assert.equal(addressUEOibt, 0x0000000000000000000000000000000000000000)
		assert.equal(boolQt5uvfC, false)
		await expect(UFragmentsh0VaGq3.mul.call(intXDMwOsb, intoforE8L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsEH1utZL = await UFragments.new({from: accounts[4]});
		const uintNycwM2 = BigInt("824")
		const addressmI7HtfB = accounts[2]
		const addressPN2PmX = "0x0000000000000000000000000000000000000001"
		const uintUmHRjGE = BigInt("1587")
		const addressIrpK0Cp = accounts[2]
//		const boolOKuzMN5 = await UFragmentsEH1utZL.transfer.call(addressmI7HtfB, uintNycwM2, {from: accounts[3]});
//		const addressUHcKRCY = await UFragmentsEH1utZL.transferOwnership.call(addressPN2PmX, {from: accounts[5]});
//		await UFragmentsEH1utZL.renounceOwnership.call({from: accounts[4]});
//		const uint8OuNP3qF = await UFragmentsEH1utZL.decimals.call({from: accounts[1]});
//		const boolHwOEpfD = await UFragmentsEH1utZL.approve.call(addressIrpK0Cp, uintUmHRjGE, {from: accounts[3]});

		await expect(UFragmentsEH1utZL.transfer.call(addressmI7HtfB, uintNycwM2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsijiPVlz = await UFragments.new({from: accounts[0]});
		const boolnm2iqQd = await UFragmentsijiPVlz.isOwner.call({from: accounts[1]});
		const uint256SA38Dj = await UFragmentsijiPVlz.totalSupply.call({from: accounts[4]});

		assert.equal(boolnm2iqQd, false)
		assert.equal(uint256SA38Dj, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsOCDhotv = await UFragments.new({from: accounts[0]});
		const uintwVCcpo = BigInt("83")
		const stringmdGSezo = "iz4i340"
		const stringmizsPRG = "nJIJwP07OgnYgaEmxC3itUGmTo2KtiweE325"
		const inttdFYPPH = BigInt("-1532")
		const intQcNIjiN = BigInt("1548")
		const addresseaydhd = accounts[1]
		const addressy9khgTw = accounts[5]
		const intpfv5Ovc = BigInt("1073")
		const intXmo5xsZ = BigInt("-453")
		const stringfwj2Yje = await UFragmentsOCDhotv.initialize.call(stringmizsPRG, stringmdGSezo, uintwVCcpo, {from: accounts[4]});
//		const int256QNx9mb6 = await UFragmentsOCDhotv.mul.call(intQcNIjiN, inttdFYPPH, {from: accounts[2]});
//		const uint256bDGMKct = await UFragmentsOCDhotv.allowance.call(addressy9khgTw, addresseaydhd, {from: accounts[1]});
//		const int256jPVe98k = await UFragmentsOCDhotv.mul.call(intXmo5xsZ, intpfv5Ovc, {from: accounts[1]});

		await expect(UFragmentsOCDhotv.mul.call(intQcNIjiN, inttdFYPPH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsiI6ER3 = await UFragments.new({from: accounts[4]});
		const addressSAzO8I9 = accounts[2]
//		const addressUy4wMP = await UFragmentsiI6ER3.initialize.call(addressSAzO8I9, {from: accounts[2]});
//		await UFragmentsiI6ER3.renounceOwnership.call({from: accounts[0]});

		await expect(UFragmentsiI6ER3.initialize.call(addressSAzO8I9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsegFyx2L = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intYL9KKzi = BigInt("-1909")
		const intUa5cBjk = BigInt("-675")
		const intZqZ4SqZ = BigInt("327")
		const int256AV5vnHH = await UFragmentsegFyx2L.abs.call(intYL9KKzi, {from: accounts[5]});
		const boolzBbAu1 = await UFragmentsegFyx2L.isOwner.call({from: accounts[1]});
		const int256lG8CYRo = await UFragmentsegFyx2L.add.call(intZqZ4SqZ, intUa5cBjk, {from: accounts[4]});
	});

	it('test for UFragments', async () => {
		const UFragmentsijiPVlz = await UFragments.new({from: accounts[0]});
		const uint256SA38Dj = await UFragmentsijiPVlz.totalSupply.call({from: accounts[4]});
		const boollA348NR = await UFragmentsijiPVlz.rebaseTimeInfo.call({from: accounts[2]});

		assert.equal(uint256SA38Dj, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsijiPVlz = await UFragments.new({from: accounts[0]});
		const uint256SA38Dj = await UFragmentsijiPVlz.totalSupply.call({from: accounts[4]});
		const stringcDCXO2 = await UFragmentsijiPVlz.symbol.call({from: accounts[2]});

		assert.equal(stringcDCXO2, "")
		assert.equal(uint256SA38Dj, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsEH1utZL = await UFragments.new({from: accounts[4]});
		const uintu0XAZTi = BigInt("824")
		const address2DUhQg = accounts[2]
		const uint0FFzCk = BigInt("62")
		const stringgnJbIZo = "PUSPCQJmcEDa6mjGUylHCIiEEe1Ba9FqLPYL3biYkBf74ZXbM5Q9DgMHUtOM9bc9xpf9na5nPA3yEwriog6TrqxT"
		const stringtCWWUXU = "8KiEiSSPvqbKHTIofmsVoj"
		const uintACvVFl6 = BigInt("1587")
		const addressrJkyQ04 = accounts[2]
//		const uint256HkvdSJ = await UFragmentsEH1utZL.calRebase.call({from: accounts[0]});
//		const boolOKuzMN5 = await UFragmentsEH1utZL.transfer.call(address2DUhQg, uintu0XAZTi, {from: accounts[3]});
//		await UFragmentsEH1utZL.renounceOwnership.call({from: accounts[4]});
//		const stringTHC8MwI = await UFragmentsEH1utZL.initialize.call(stringtCWWUXU, stringgnJbIZo, uint0FFzCk, {from: accounts[3]});
//		const boolHwOEpfD = await UFragmentsEH1utZL.approve.call(addressrJkyQ04, uintACvVFl6, {from: accounts[3]});

		await expect(UFragmentsEH1utZL.calRebase.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsijiPVlz = await UFragments.new({from: accounts[0]});
		const uint8m8WMLHw = await UFragmentsijiPVlz.decimals.call({from: accounts[4]});
		const uint256SA38Dj = await UFragmentsijiPVlz.totalSupply.call({from: accounts[4]});
		const uint256bd1vB72 = await UFragmentsijiPVlz.totalSupply.call({from: accounts[0]});

		assert.equal(uint256SA38Dj, BigInt("0"))
		assert.equal(uint256bd1vB72, BigInt("0"))
		assert.equal(uint8m8WMLHw, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsijiPVlz = await UFragments.new({from: accounts[0]});
		const uintbUKNa0k = BigInt("1066")
		const addressdrNRtHg = "0x0000000000000000000000000000000000000001"
		const boolwRJzI24 = await UFragmentsijiPVlz.approve.call(addressdrNRtHg, uintbUKNa0k, {from: accounts[4]});
		const uint256SA38Dj = await UFragmentsijiPVlz.totalSupply.call({from: accounts[4]});

		assert.equal(boolwRJzI24, true)
		assert.equal(uint256SA38Dj, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsEH1utZL = await UFragments.new({from: accounts[4]});
		const uintHbtCglX = BigInt("824")
		const addressLKI7kUt = accounts[2]
		const uinttF1Tibq = BigInt("1587")
		const addressjD2gOD = accounts[3]
		const stringFLPn7Z7 = await UFragmentsEH1utZL.name.call({from: accounts[5]});
//		const boolOKuzMN5 = await UFragmentsEH1utZL.transfer.call(addressLKI7kUt, uintHbtCglX, {from: accounts[3]});
//		const boolHwOEpfD = await UFragmentsEH1utZL.approve.call(addressjD2gOD, uinttF1Tibq, {from: accounts[3]});

		assert.equal(stringFLPn7Z7, "")
		await expect(UFragmentsEH1utZL.transfer.call(addressLKI7kUt, uintHbtCglX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsijiPVlz = await UFragments.new({from: accounts[0]});
		const uintlR2vDhN = BigInt("642")
		const addressbMB5T4p = accounts[2]
		const addressenvkEAw = accounts[3]
//		const booluNhM6Y2 = await UFragmentsijiPVlz.transferFrom.call(addressenvkEAw, addressbMB5T4p, uintlR2vDhN, {from: accounts[3]});
//		const uint256SA38Dj = await UFragmentsijiPVlz.totalSupply.call({from: accounts[4]});

		await expect(UFragmentsijiPVlz.transferFrom.call(addressenvkEAw, addressbMB5T4p, uintlR2vDhN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsijiPVlz = await UFragments.new({from: accounts[0]});
		const addressPEzWX3O = accounts[0]
		const addressY3Piktf = accounts[4]
		const uint256SA38Dj = await UFragmentsijiPVlz.totalSupply.call({from: accounts[4]});
		const stringzR0KVwZ = await UFragmentsijiPVlz.symbol.call({from: accounts[2]});
		const uint256sAlIIoV = await UFragmentsijiPVlz.allowance.call(addressY3Piktf, addressPEzWX3O, {from: accounts[3]});

		assert.equal(stringzR0KVwZ, "")
		assert.equal(uint256SA38Dj, BigInt("0"))
		assert.equal(uint256sAlIIoV, BigInt("0"))
	});
})