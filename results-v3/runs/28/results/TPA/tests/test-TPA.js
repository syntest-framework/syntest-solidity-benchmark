const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAPbIAn4 = await TPA.new({from: accounts[4]});
		const uintwQQjlo = BigInt("519")
		const uintqwKdS3e = BigInt("1830")
		const addressQMPK1pd = accounts[1]
		const addressxLB0eSO = accounts[1]
		const addressEoXgI3 = "0x0000000000000000000000000000000000000001"
		const uintIue9NRt = BigInt("429")
		const addresszO176cp = accounts[1]
		const boolPsSAUCx = await TPAPbIAn4.transferWithLock.call(addressQMPK1pd, uintqwKdS3e, uintwQQjlo, {from: accounts[1]});
		const addressEj6y9kH = await TPAPbIAn4.removeAdmin.call(addressxLB0eSO, {from: accounts[1]});
		const boolrzvot7i = await TPAPbIAn4.isAdmin.call(addressEoXgI3, {from: accounts[1]});
		const boolES3slPX = await TPAPbIAn4.approve.call(addresszO176cp, uintIue9NRt, {from: accounts[2]});

		await expect(TPAPbIAn4.transferWithLock.call(addressQMPK1pd, uintqwKdS3e, uintwQQjlo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringtNdBEjU = "m9k0QrbPWcSOOd3rtNlFLnQn5I"
		const stringau7FsGw = "BVv9Ed7UBFUiCFCeMBCMlj3bTuGfrhMA2wDspmlsQd6WgVApOmF3FnQhOLC5MyfXRy5Ac35Y66Kjyr6RlfXRQztK7Q5ue126"
		const uintGjxwRMJ = BigInt("117")
		const TPAzjj77Ds = await TPA.new(stringtNdBEjU, stringau7FsGw, uintGjxwRMJ, {from: "0x0000000000000000000000000000000000000001"});
		const uintvx6XPc6 = BigInt("1082")
		const addressEmBjYi = accounts[0]
		const uintYPUTmDe = BigInt("748")
		const addressRG6MkcH = accounts[3]
		const boolniv8Ifq = await TPAzjj77Ds.transfer.call(addressEmBjYi, uintvx6XPc6, {from: accounts[0]});
		await TPAzjj77Ds.unpause.call({from: accounts[2]});
		await TPAzjj77Ds.renounceAdmin.call({from: accounts[1]});
		const boolBacDIEi = await TPAzjj77Ds.transfer.call(addressRG6MkcH, uintYPUTmDe, {from: accounts[4]});
		await TPAzjj77Ds.pause.call({from: accounts[4]});
	});

	it('test for TPA', async () => {
		const TPAvi5fZU = await TPA.new({from: accounts[4]});
		const uintuIMawM2 = BigInt("840")
		const addressW8bEnuh = accounts[3]
		const uintJzC2N4i = BigInt("1263")
		const addressvkQEeer = accounts[4]
		const boolHEQGFmi = await TPAvi5fZU.increaseAllowance.call(addressW8bEnuh, uintuIMawM2, {from: accounts[1]});
		const stringso0m9rY = await TPAvi5fZU.name.call({from: accounts[2]});
		const uint256Efdgllf = await TPAvi5fZU.burn.call(uintJzC2N4i, {from: accounts[1]});
		const boolkARQsN3 = await TPAvi5fZU.paused.call({from: accounts[4]});
		const uint256jfTFXYA = await TPAvi5fZU.balanceOf.call(addressvkQEeer, {from: accounts[4]});

		assert.equal(boolHEQGFmi, true)
		assert.equal(stringso0m9rY, "TPA")
		await expect(TPAvi5fZU.burn.call(uintJzC2N4i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAJ9Nz5Zb = await TPA.new({from: accounts[4]});
		const addressOFaHIZ9 = accounts[1]
		const uinttAHYyu0 = BigInt("190")
		const addressbvLZz0D = "0x0000000000000000000000000000000000000001"
		await TPAJ9Nz5Zb.whenPaused.call({from: accounts[1]});
		const boolZEPJBk5 = await TPAJ9Nz5Zb.isAdmin.call(addressOFaHIZ9, {from: accounts[1]});
		const uint8a51ssOF = await TPAJ9Nz5Zb.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhxNx8rV = await TPAJ9Nz5Zb.transfer.call(addressbvLZz0D, uinttAHYyu0, {from: accounts[0]});

		await expect(TPAJ9Nz5Zb.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAYJR3b9y = await TPA.new({from: accounts[0]});
		const uintWrYevUX = BigInt("1389")
		const addressf7v7qn7 = accounts[0]
		const addressbXNpGbo = accounts[0]
		const addressvQ8JCyk = accounts[4]
		const uintAOl0SY = BigInt("1403")
		const addressrF6ofr = accounts[2]
		const uintFKd63s3 = BigInt("1958")
		const addressvK5mMCY = accounts[4]
		const boolIWLcPSq = await TPAYJR3b9y.transferFrom.call(addressbXNpGbo, addressf7v7qn7, uintWrYevUX, {from: accounts[1]});
		const boolF17rY9x = await TPAYJR3b9y.freezeAccount.call(addressvQ8JCyk, {from: accounts[2]});
		const addressU2rHsh0 = await TPAYJR3b9y.burnFrom.call(addressrF6ofr, uintAOl0SY, {from: accounts[2]});
		const boolV9RBgDQ = await TPAYJR3b9y.decreaseAllowance.call(addressvK5mMCY, uintFKd63s3, {from: accounts[2]});

		await expect(TPAYJR3b9y.transferFrom.call(addressbXNpGbo, addressf7v7qn7, uintWrYevUX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAYJR3b9y = await TPA.new({from: accounts[0]});
		const uintKqBStj9 = BigInt("290")
		const addressIw6OzLC = "0x0000000000000000000000000000000000000001"
		const uinty4J3gaz = BigInt("1389")
		const addressPJmmBD0 = accounts[0]
		const addressrOBDZ7F = accounts[0]
		const addressfTOWEm = accounts[4]
		const uintq7WKGBd = BigInt("1403")
		const addressbVzQfqF = accounts[2]
		const boolgwlYqKk = await TPAYJR3b9y.transfer.call(addressIw6OzLC, uintKqBStj9, {from: accounts[4]});
		const uint256zXgtpM = await TPAYJR3b9y.totalSupply.call({from: accounts[1]});
		const boolIWLcPSq = await TPAYJR3b9y.transferFrom.call(addressrOBDZ7F, addressPJmmBD0, uinty4J3gaz, {from: accounts[1]});
		const boolF17rY9x = await TPAYJR3b9y.freezeAccount.call(addressfTOWEm, {from: accounts[2]});
		const stringTfC0zAt = await TPAYJR3b9y.symbol.call({from: accounts[3]});
		const addressU2rHsh0 = await TPAYJR3b9y.burnFrom.call(addressbVzQfqF, uintq7WKGBd, {from: accounts[2]});

		await expect(TPAYJR3b9y.transfer.call(addressIw6OzLC, uintKqBStj9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAYJR3b9y = await TPA.new({from: accounts[0]});
		const uinto2GkOrL = BigInt("1775")
		const addressX4GOj7Z = accounts[1]
		const uinte97SVlZ = BigInt("1389")
		const addressEJvCmxv = accounts[0]
		const addressHPGBeG0 = accounts[0]
		const addressKoRVmXO = accounts[4]
		const uintvO0IbCJ = BigInt("1403")
		const addressxPHw8En = accounts[3]
		const boolblBn3Pf = await TPAYJR3b9y.decreaseAllowance.call(addressX4GOj7Z, uinto2GkOrL, {from: accounts[2]});
		const boolIWLcPSq = await TPAYJR3b9y.transferFrom.call(addressHPGBeG0, addressEJvCmxv, uinte97SVlZ, {from: accounts[1]});
		const boolF17rY9x = await TPAYJR3b9y.freezeAccount.call(addressKoRVmXO, {from: accounts[2]});
		const addressU2rHsh0 = await TPAYJR3b9y.burnFrom.call(addressxPHw8En, uintvO0IbCJ, {from: accounts[2]});

		await expect(TPAYJR3b9y.decreaseAllowance.call(addressX4GOj7Z, uinto2GkOrL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPApFOUShd = await TPA.new({from: accounts[1]});
		const uintgGfAx9O = BigInt("541")
		const addressCsRleZz = accounts[2]
		const boolk5TqM9c = await TPApFOUShd.approve.call(addressCsRleZz, uintgGfAx9O, {from: accounts[2]});
		const uint256KblHnE3 = await TPApFOUShd.totalSupply.call({from: accounts[2]});
		const boolvZ1Al2g = await TPApFOUShd.paused.call({from: accounts[1]});

		assert.equal(boolk5TqM9c, true)
		assert.equal(boolvZ1Al2g, false)
		assert.equal(uint256KblHnE3, BigInt("10000000000000000000000000000"))
	});

	it('test for TPA', async () => {
		const TPAeQO6tbZ = await TPA.new({from: accounts[4]});
		const addressD5WTso = accounts[4]
		const uintMMK0gDF = BigInt("1992")
		const addressy7sW0o = accounts[2]
		const boolWpBognj = await TPAeQO6tbZ.isOwner.call(addressD5WTso, {from: accounts[4]});
		await TPAeQO6tbZ.onlyAdmin.call({from: accounts[4]});
		const booll6M7OSS = await TPAeQO6tbZ.unlock.call(addressy7sW0o, uintMMK0gDF, {from: accounts[0]});

		assert.equal(boolWpBognj, true)
		await expect(TPAeQO6tbZ.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAv8KDG0y = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkScDgBh = BigInt("737")
		const addressYP1k7Va = accounts[4]
		const addressS0xvjC = accounts[2]
		const uinttGaHkf = BigInt("2031")
		const uintTSFUopD = BigInt("891")
		const addressylQQr0M = accounts[4]
		const addressfKnune8 = accounts[2]
		const addresswcEURUr = accounts[0]
		const uintRsHdT5z = BigInt("112")
		const addresstUc4RBM = accounts[3]
		const booldjKPPC1 = await TPAv8KDG0y.transferFrom.call(addressS0xvjC, addressYP1k7Va, uintkScDgBh, {from: accounts[2]});
		const boolOAeSufM = await TPAv8KDG0y.lock.call(addressylQQr0M, uintTSFUopD, uinttGaHkf, {from: accounts[1]});
		const uint256dQo7Jz5 = await TPAv8KDG0y.balanceOf.call(addressfKnune8, {from: accounts[2]});
		await TPAv8KDG0y.whenPaused.call({from: accounts[2]});
		const addressfT1eqUs = await TPAv8KDG0y.notFrozen.call(addresswcEURUr, {from: accounts[4]});
		const boolElAGvnp = await TPAv8KDG0y.transfer.call(addresstUc4RBM, uintRsHdT5z, {from: accounts[1]});
	});

	it('test for TPA', async () => {
		const TPAeQO6tbZ = await TPA.new({from: accounts[4]});
		const uintXV0tVcv = BigInt("1992")
		const address6pVLTc = accounts[2]
		await TPAeQO6tbZ.renounceAdmin.call({from: accounts[5]});
		const booll6M7OSS = await TPAeQO6tbZ.unlock.call(address6pVLTc, uintXV0tVcv, {from: accounts[0]});

		await expect(TPAeQO6tbZ.renounceAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAYJR3b9y = await TPA.new({from: accounts[0]});
		const addressq780iPX = accounts[2]
		const uinteqgVKlF = BigInt("1389")
		const addressmLgn9av = accounts[0]
		const addressOZ9FKuB = accounts[0]
		const address4PX1Uk = accounts[5]
		const addressl3fNSTz = "0x0000000000000000000000000000000000000001"
		const uintxu8J4E3 = BigInt("1954")
		const addressC3zRagG = accounts[2]
		const uint256ZkgxYY3 = await TPAYJR3b9y.balanceOf.call(addressq780iPX, {from: accounts[1]});
		const boolIWLcPSq = await TPAYJR3b9y.transferFrom.call(addressOZ9FKuB, addressmLgn9av, uinteqgVKlF, {from: accounts[1]});
		const boolF17rY9x = await TPAYJR3b9y.freezeAccount.call(address4PX1Uk, {from: accounts[2]});
		const uint256wHyaPFl = await TPAYJR3b9y.balanceOf.call(addressl3fNSTz, {from: accounts[5]});
		const boolCdOryHa = await TPAYJR3b9y.approve.call(addressC3zRagG, uintxu8J4E3, {from: accounts[2]});

		assert.equal(uint256ZkgxYY3, BigInt("0"))
		await expect(TPAYJR3b9y.transferFrom.call(addressOZ9FKuB, addressmLgn9av, uinteqgVKlF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAeQO6tbZ = await TPA.new({from: accounts[4]});
		const addressKMHcrVR = "0x0000000000000000000000000000000000000001"
		const addressToZcovl = accounts[5]
		const uintlQ1B3lW = BigInt("1992")
		const addressvEL8M5P = accounts[2]
		const uint256vksm99W = await TPAeQO6tbZ.allowance.call(addressToZcovl, addressKMHcrVR, {from: accounts[5]});
		await TPAeQO6tbZ.renounceAdmin.call({from: accounts[5]});
		const booll6M7OSS = await TPAeQO6tbZ.unlock.call(addressvEL8M5P, uintlQ1B3lW, {from: accounts[0]});

		assert.equal(uint256vksm99W, BigInt("0"))
		await expect(TPAeQO6tbZ.renounceAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAeQO6tbZ = await TPA.new({from: accounts[4]});
		const uintWYxspA = BigInt("815")
		const addressbaxnpf7 = accounts[0]
		const uintJtVkzra = BigInt("1365")
		const address7F6CGa = "0x0000000000000000000000000000000000000001"
		const uint3eBzmr = BigInt("1992")
		const addressXBjy9Ez = accounts[2]
		const boolXYNaUnp = await TPAeQO6tbZ.transfer.call(addressbaxnpf7, uintWYxspA, {from: accounts[4]});
		const addressyVYHMyc = await TPAeQO6tbZ.burnFrom.call(address7F6CGa, uintJtVkzra, {from: accounts[3]});
		const booll6M7OSS = await TPAeQO6tbZ.unlock.call(addressXBjy9Ez, uint3eBzmr, {from: accounts[0]});
		const boolYo8e4e = await TPAeQO6tbZ.paused.call({from: accounts[4]});

		assert.equal(boolXYNaUnp, true)
		await expect(TPAeQO6tbZ.burnFrom.call(address7F6CGa, uintJtVkzra, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAX4E0LLU = await TPA.new({from: accounts[4]});
		const uintHeSJFcw = BigInt("1509")
		const uintaokSiB = BigInt("164")
		const addressHIVfewb = accounts[0]
		const addressxsesL1U = accounts[0]
		const addressJrCa50q = accounts[4]
		const boolcIMp9u = await TPAX4E0LLU.lock.call(addressHIVfewb, uintaokSiB, uintHeSJFcw, {from: accounts[4]});
		const boolLwrEfgh = await TPAX4E0LLU.isOwner.call(addressxsesL1U, {from: accounts[1]});
		const addresseIG5jaL = await TPAX4E0LLU.transferOwnership.call(addressJrCa50q, {from: accounts[4]});
		await TPAX4E0LLU.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8DqHCydp = await TPAX4E0LLU.decimals.call({from: accounts[0]});

		await expect(TPAX4E0LLU.lock.call(addressHIVfewb, uintaokSiB, uintHeSJFcw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAeQO6tbZ = await TPA.new({from: accounts[4]});
		const uint8HepVFd4 = await TPAeQO6tbZ.decimals.call({from: accounts[0]});
		await TPAeQO6tbZ.renounceAdmin.call({from: accounts[5]});

		assert.equal(uint8HepVFd4, BigInt("18"))
		await expect(TPAeQO6tbZ.renounceAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAYJR3b9y = await TPA.new({from: accounts[0]});
		const uintsmukTOW = BigInt("633")
		const uintKVRgr5 = BigInt("154")
		const addressIyRM4Qq = accounts[4]
		const uintmEsocfZ = BigInt("1389")
		const address9CtOZJ = accounts[1]
		const addressIwLlkwU = accounts[0]
		const booliLp80m = await TPAYJR3b9y.transferWithLock.call(addressIyRM4Qq, uintKVRgr5, uintsmukTOW, {from: accounts[0]});
		const boolIWLcPSq = await TPAYJR3b9y.transferFrom.call(addressIwLlkwU, address9CtOZJ, uintmEsocfZ, {from: accounts[1]});

		assert.equal(booliLp80m, true)
		await expect(TPAYJR3b9y.transferFrom.call(addressIwLlkwU, address9CtOZJ, uintmEsocfZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAzqdwo9r = await TPA.new({from: accounts[4]});
		const addresswvzi5AG = accounts[1]
		const uintC9weVjD = BigInt("1247")
		const addressXWxgEFX = accounts[3]
		const uintJGK1ANQ = BigInt("155")
		const addressVH38sFn = accounts[4]
		const addressM9k339F = accounts[2]
		const addressOOE9YiU = await TPAzqdwo9r.removeAdmin.call(addresswvzi5AG, {from: accounts[4]});
		const boolhYJy0jl = await TPAzqdwo9r.unlock.call(addressXWxgEFX, uintC9weVjD, {from: accounts[3]});
		const boolt9qux30 = await TPAzqdwo9r.approve.call(addressVH38sFn, uintJGK1ANQ, {from: accounts[1]});
		const addresski7hAgS = await TPAzqdwo9r.notFrozen.call(addressM9k339F, {from: accounts[4]});

		await expect(TPAzqdwo9r.removeAdmin.call(addresswvzi5AG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAX4E0LLU = await TPA.new({from: accounts[4]});
		const addressFLRd7mr = accounts[5]
		const addresseIG5jaL = await TPAX4E0LLU.transferOwnership.call(addressFLRd7mr, {from: accounts[4]});
	});

	it('test for TPA', async () => {
		const TPAYJR3b9y = await TPA.new({from: accounts[0]});
		const addressXvfpLVc = accounts[0]
		const uintLnX5Swb = BigInt("1389")
		const addressT5iOEV2 = accounts[1]
		const addressNCH8J9 = accounts[0]
		const addressK9HFO96 = await TPAYJR3b9y.upgradeTo.call(addressXvfpLVc, {from: accounts[0]});
		const boolTluw1uD = await TPAYJR3b9y.paused.call({from: accounts[2]});
		const boolIWLcPSq = await TPAYJR3b9y.transferFrom.call(addressNCH8J9, addressT5iOEV2, uintLnX5Swb, {from: accounts[1]});
		const stringE6fuobl = await TPAYJR3b9y.symbol.call({from: accounts[2]});

		assert.equal(boolTluw1uD, false)
		await expect(TPAYJR3b9y.transferFrom.call(addressNCH8J9, addressT5iOEV2, uintLnX5Swb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAX4E0LLU = await TPA.new({from: accounts[4]});
		const address4VnYqN = "0x0000000000000000000000000000000000000001"
		const string4EpZMX = await TPAX4E0LLU.symbol.call({from: accounts[0]});
		const uint256RnKNRS6 = await TPAX4E0LLU.balanceOf.call(address4VnYqN, {from: accounts[0]});
		await TPAX4E0LLU.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(string4EpZMX, "TPA")
		assert.equal(uint256RnKNRS6, BigInt("0"))
		await expect(TPAX4E0LLU.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAX4E0LLU = await TPA.new({from: accounts[4]});
		const addressdOItsBV = accounts[4]
		const uintahiXZR = BigInt("1509")
		const uintoOgY1Ut = BigInt("208")
		const addresscjRlDzU = accounts[1]
		const uint256C0TP3dF = await TPAX4E0LLU.balanceOf.call(addressdOItsBV, {from: accounts[0]});
		await TPAX4E0LLU.renounceAdmin.call({from: accounts[4]});
		const boolcIMp9u = await TPAX4E0LLU.lock.call(addresscjRlDzU, uintoOgY1Ut, uintahiXZR, {from: accounts[4]});
		const boolo2RxEFf = await TPAX4E0LLU.paused.call({from: accounts[2]});

		assert.equal(uint256C0TP3dF, BigInt("10000000000000000000000000000"))
		await expect(TPAX4E0LLU.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAYJR3b9y = await TPA.new({from: accounts[0]});
		const addressJ0nhyzU = accounts[2]
		const uintH3125Sv = BigInt("1883")
		const addressvd3Trb = accounts[1]
		const boolhatXVoc = await TPAYJR3b9y.freezeAccount.call(addressJ0nhyzU, {from: accounts[0]});
		const boolpEuoTRQ = await TPAYJR3b9y.transfer.call(addressvd3Trb, uintH3125Sv, {from: accounts[0]});

		assert.equal(boolhatXVoc, true)
		assert.equal(boolpEuoTRQ, true)
	});
})