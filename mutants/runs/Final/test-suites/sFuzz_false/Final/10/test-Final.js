const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringRKafCGQ = "Ybi55U4Cay1gy8md2CcSQ5snwTpIyrnSHNeftw5Mk9caJsNcNKm"
		const stringGOPvmz5 = "fpyRlmWkgWDWoSOWu39cINaqupOtDCXyb0xEtdT1VjBc8"
		const uintgrCY5sv = BigInt("1750")
		const FinalAqcelI = await Final.new(stringRKafCGQ, stringGOPvmz5, uintgrCY5sv, {from: accounts[0]});
		const uintK8JNHif = BigInt("272")
		const addressz6Ohgd4 = accounts[0]
		const uint8EQDEu6T = await FinalAqcelI.decimals.call({from: accounts[1]});
		const boolxMNWxPy = await FinalAqcelI.increaseAllowance.call(addressz6Ohgd4, uintK8JNHif, {from: accounts[2]});

		assert.equal(uint8EQDEu6T, BigInt("18"))
		await expect(FinalAqcelI.increaseAllowance.call(addressz6Ohgd4, uintK8JNHif, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringhj88c0H = "SasJHDoIbz19ifpl"
		const string3X6z8u = "kJ9YQhd6J53TlSPNn3oyqORPYvPAk2OReQqwfjyewbHTGeLjJfaIJpt9ngB6vhuHsDOKFz1NFDyybkqVjumdUMaauLM"
		const uintlZLMrr7 = BigInt("131")
		const FinalYyVzvBN = await Final.new(stringhj88c0H, string3X6z8u, uintlZLMrr7, {from: "0x0000000000000000000000000000000000000001"});
		const uintQtzPPv = BigInt("1865")
		const addressFSNQU6a = accounts[4]
		const addressr1i3JBE = accounts[1]
		const addressKFGAZyp = accounts[2]
		const uintq1Pvhua = BigInt("606")
		const addresssm5ygUL = accounts[2]
		const uintqap26sO = await FinalYyVzvBN.totalSupply.call({from: accounts[4]});
		const bool2s2nu3 = await FinalYyVzvBN.transferFrom.call(addressr1i3JBE, addressFSNQU6a, uintQtzPPv, {from: "0x0000000000000000000000000000000000000001"});
		const uintRq9NWVd = await FinalYyVzvBN.balanceOf.call(addressKFGAZyp, {from: accounts[0]});
		const boolWZA4Kq6 = await FinalYyVzvBN.decreaseAllowance.call(addresssm5ygUL, uintq1Pvhua, {from: accounts[3]});
	});

	it('test for Final', async () => {
		const stringguoUXwO = "deRHKEKPDu7Uz0EIcNDAmW3Gi5bWzOC4L7fn8jhRFjFLTINUVo8YVbRZ9W5QKXvHVFivQs"
		const stringQ7KSWjk = "zOdOYAA"
		const uintkAKYqPS = BigInt("146")
		const FinalWddUljK = await Final.new(stringguoUXwO, stringQ7KSWjk, uintkAKYqPS, {from: accounts[4]});
		const uintQW7kZ0 = BigInt("1994")
		const addressiuM5Fq0 = accounts[2]
		const uintY3uQvy8 = BigInt("859")
		const addressYzFJ6r4 = accounts[5]
		const uintoaD00j4 = BigInt("1768")
		const addressxBMUiaz = accounts[5]
		const boolSDxYeGW = await FinalWddUljK.transfer.call(addressiuM5Fq0, uintQW7kZ0, {from: accounts[4]});
		const boolCq1cW8I = await FinalWddUljK.transfer.call(addressYzFJ6r4, uintY3uQvy8, {from: accounts[1]});
		const booleSvomh = await FinalWddUljK.approve.call(addressxBMUiaz, uintoaD00j4, {from: accounts[2]});

		assert.equal(boolSDxYeGW, true)
		await expect(FinalWddUljK.transfer.call(addressYzFJ6r4, uintY3uQvy8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringpQQIeh7 = "FTIlS"
		const stringrKWwqq = "mukbisJNxLpZ7cRi1i16ma9BGTgUz27EQSKB7sD"
		const uintQFOV6oy = BigInt("1791")
		const FinalOeNA8tY = await Final.new(stringpQQIeh7, stringrKWwqq, uintQFOV6oy, {from: accounts[4]});
		const addressLM3GD8P = "0x0000000000000000000000000000000000000001"
		const addressY0M2r0U = accounts[2]
		const uintOZA0ZIi = BigInt("1220")
		const addressUFTvdEp = accounts[4]
		const addressZpPB4u = accounts[4]
		const boolIK4N9kq = await FinalOeNA8tY.transferownership.call(addressLM3GD8P, {from: accounts[3]});
		const boolYqCkoAp = await FinalOeNA8tY.transferownership.call(addressY0M2r0U, {from: accounts[1]});
		const boolDakQoUa = await FinalOeNA8tY.transferFrom.call(addressZpPB4u, addressUFTvdEp, uintOZA0ZIi, {from: accounts[0]});

		await expect(FinalOeNA8tY.transferownership.call(addressLM3GD8P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringCcPEdgb = "z6bAs6Jcwo91NoVgvxr781lULW3hQ6I7zraerx"
		const stringWZKNjuW = "ipPFIoVeMwb7y3DOMcmQHYsTgE0TG19uIxeNc6KqFn40YfUopbUQlXxkntvzayafQdo5sM93"
		const uinti31c2E1 = BigInt("119")
		const FinalknQjPXm = await Final.new(stringCcPEdgb, stringWZKNjuW, uinti31c2E1, {from: accounts[4]});
		const addressPqvruP8 = accounts[1]
		const uintrArYC5g = BigInt("559")
		const addressfVklwWx = accounts[2]
		const addressC5zIvnA = accounts[5]
		const addressHILi4t = accounts[2]
		const uintzuoMLig = await FinalknQjPXm.balanceOf.call(addressPqvruP8, {from: accounts[0]});
		const boolbrqlzQz = await FinalknQjPXm.approve.call(addressfVklwWx, uintrArYC5g, {from: accounts[4]});
		const uintH3Qb5Ts = await FinalknQjPXm.balanceOf.call(addressC5zIvnA, {from: accounts[1]});
		const uintfRoAEzT = await FinalknQjPXm.balanceOf.call(addressHILi4t, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbrqlzQz, true)
		assert.equal(uintH3Qb5Ts, BigInt("0"))
		assert.equal(uintfRoAEzT, BigInt("0"))
		assert.equal(uintzuoMLig, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringgFmzmJH = "oBiql6v4eEa3OmWZoj8NpZEmCkefX9aTKtEPcr3OErs2L8RGUD2JDK73C6MGVCypGiRKAmM"
		const stringGPWiWLP = "SsOZCY8oUeDG3lQLdx44WdBBIXb6fILw5AgPVT4bWrZH"
		const uintQxVM8ju = BigInt("152")
		const Final3cOLxv = await Final.new(stringgFmzmJH, stringGPWiWLP, uintQxVM8ju, {from: accounts[2]});
		const uintzx3VKKk = BigInt("763")
		const addressx4Ab2Fm = accounts[3]
		const addressa8RliRg = accounts[0]
		const uintXulTFKS = BigInt("730")
		const addressCD6qf5f = accounts[0]
		const uinthJTQACp = BigInt("196")
		const addressT87VtIt = accounts[0]
		const uintdX1xHKR = BigInt("1047")
		const addressYfdmSB0 = accounts[1]
		const boolqHO7c6g = await Final3cOLxv.approve.call(addressx4Ab2Fm, uintzx3VKKk, {from: accounts[4]});
		const uintgsqnVtc = await Final3cOLxv.balanceOf.call(addressa8RliRg, {from: accounts[3]});
		const boolWBzlm9l = await Final3cOLxv.approveAndCall.call(addressCD6qf5f, uintXulTFKS, {from: accounts[1]});
		const boolsplFcM0 = await Final3cOLxv.approve.call(addressT87VtIt, uinthJTQACp, {from: accounts[5]});
		const boolsNRpvfs = await Final3cOLxv.decreaseAllowance.call(addressYfdmSB0, uintdX1xHKR, {from: accounts[5]});

		assert.equal(boolqHO7c6g, true)
		assert.equal(uintgsqnVtc, BigInt("0"))
		await expect(Final3cOLxv.approveAndCall.call(addressCD6qf5f, uintXulTFKS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringguoUXwO = "deRHKEKPDu7Uz0EIcNDAmW3Gi5bWzOC4L7fn8jhRFjFLTINUVo8YVbRZ9W5QKXvHVFivQs"
		const stringQ7KSWjk = "zOdOYAA"
		const uintwdr9eVM = BigInt("146")
		const FinalWddUljK = await Final.new(stringguoUXwO, stringQ7KSWjk, uintwdr9eVM, {from: accounts[4]});
		const uintaSeq1uc = BigInt("1516")
		const addressSjRJLZ8 = accounts[3]
		const uintHX3SLv1 = BigInt("1994")
		const addressg3iR47 = accounts[2]
		const uintdBnyxKn = BigInt("859")
		const addressdKMVvr = accounts[6]
		const boollfD3fuj = await FinalWddUljK.approveAndCall.call(addressSjRJLZ8, uintaSeq1uc, {from: accounts[4]});
		const boolSDxYeGW = await FinalWddUljK.transfer.call(addressg3iR47, uintHX3SLv1, {from: accounts[4]});
		const uint8z3XNBbp = await FinalWddUljK.decimals.call({from: accounts[0]});
		const boolCq1cW8I = await FinalWddUljK.transfer.call(addressdKMVvr, uintdBnyxKn, {from: accounts[1]});

		assert.equal(boolSDxYeGW, true)
		assert.equal(boollfD3fuj, true)
		assert.equal(uint8z3XNBbp, BigInt("18"))
		await expect(FinalWddUljK.transfer.call(addressdKMVvr, uintdBnyxKn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringguoUXwO = "deRHKEKPDu7Uz0EIcNDAmW3Gi5bWzOC4L7fn8jhRFjFLTINUVo8YVbRZ9W5QKXvHVFivQs"
		const stringQ7KSWjk = "zOdOYAA"
		const uintdCZ0Cfk = BigInt("146")
		const FinalWddUljK = await Final.new(stringguoUXwO, stringQ7KSWjk, uintdCZ0Cfk, {from: accounts[4]});
		const uintwfNZstQ = BigInt("753")
		const addressBwrwQKP = accounts[4]
		const uintv1dnGEq = BigInt("0")
		const addressg28Vf3 = accounts[2]
		const addressBt3F4Kj = accounts[2]
		const uintmDiPHY2 = BigInt("1099")
		const addressoxESgki = accounts[0]
		const uintjMAWrlT = BigInt("52")
		const addressgMdttc = accounts[1]
		const boolSDxYeGW = await FinalWddUljK.transfer.call(addressBwrwQKP, uintwfNZstQ, {from: accounts[4]});
		const boolBvY68bh = await FinalWddUljK.transferFrom.call(addressBt3F4Kj, addressg28Vf3, uintv1dnGEq, {from: accounts[4]});
		const boolxo22rY0 = await FinalWddUljK.decreaseAllowance.call(addressoxESgki, uintmDiPHY2, {from: accounts[0]});
		const boolqkLgADB = await FinalWddUljK.approve.call(addressgMdttc, uintjMAWrlT, {from: accounts[1]});

		assert.equal(boolBvY68bh, true)
		assert.equal(boolSDxYeGW, true)
		await expect(FinalWddUljK.decreaseAllowance.call(addressoxESgki, uintmDiPHY2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})