const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerzfPSc9q = await vnxManager.new({from: accounts[0]});
		const uintWmxONjc = BigInt("1278")
		const stringfbuSTcq = "wwXEY2jpPs8LNtxITgkvx8qujS4gSFogKkI3oOnpabbFOUXJx5Xsy78tTbt6hz"
		const uintBd9qCP3 = BigInt("697")
		const addressODLcQlw = accounts[1]
//		await vnxManagerzfPSc9q.onlyOwner.call({from: accounts[5]});
//		await vnxManagerzfPSc9q.renounceOwnership.call({from: accounts[0]});
//		const uint256B2ch9lV = await vnxManagerzfPSc9q.addRole.call(stringfbuSTcq, uintWmxONjc, {from: accounts[3]});
//		const addressJkjLBi6 = await vnxManagerzfPSc9q.addBearer.call(addressODLcQlw, uintBd9qCP3, {from: accounts[0]});

		await expect(vnxManagerzfPSc9q.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerjSMkE6s = await vnxManager.new({from: accounts[0]});
		const uintLp8twHY = BigInt("1611")
		const addresshubvJjF = accounts[2]
		const addressBSDg78b = accounts[0]
		const uintmHNERnN = BigInt("530")
		const addresskUQlY3 = accounts[0]
		const uintkr9dXKT = BigInt("537")
		const addressou9CMcw = accounts[3]
		const boolOmi7x4s = await vnxManagerjSMkE6s.hasRole.call(addresshubvJjF, uintLp8twHY, {from: accounts[3]});
		const boolc0Qfvxh = await vnxManagerjSMkE6s.isOwner.call({from: accounts[1]});
//		const addressHW3kvSO = await vnxManagerjSMkE6s.transferOwnership.call(addressBSDg78b, {from: accounts[1]});
//		const boolIVOhOqV = await vnxManagerjSMkE6s.hasRole.call(addresskUQlY3, uintmHNERnN, {from: accounts[3]});
//		const addressWcDzIP = await vnxManagerjSMkE6s.removeBearer.call(addressou9CMcw, uintkr9dXKT, {from: accounts[4]});

		assert.equal(boolOmi7x4s, false)
		assert.equal(boolc0Qfvxh, false)
		await expect(vnxManagerjSMkE6s.transferOwnership.call(addressBSDg78b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerwE2sUbJ = await vnxManager.new({from: accounts[3]});
		const uintwcmEPf6 = BigInt("1271")
		const stringkERV0U4 = "NKIRuqfRJnzmmgFUY15efiOR5WQHUE3bf23uz92v39cIxMk216"
		const uintcNiZlaP = BigInt("384")
		const addressN3aP37P = accounts[2]
		const uintfuF1vvz = BigInt("279")
		const addressgTMvkq = accounts[4]
//		const uint256MqamC5R = await vnxManagerwE2sUbJ.addRole.call(stringkERV0U4, uintwcmEPf6, {from: accounts[0]});
//		const uint256m62QGaM = await vnxManagerwE2sUbJ.totalRoles.call({from: accounts[4]});
//		const addressNqAFTI3 = await vnxManagerwE2sUbJ.removeBearer.call(addressN3aP37P, uintcNiZlaP, {from: accounts[0]});
//		const addressLr9FlFy = await vnxManagerwE2sUbJ.removeBearer.call(addressgTMvkq, uintfuF1vvz, {from: accounts[5]});
//		await vnxManagerwE2sUbJ.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManagerwE2sUbJ.addRole.call(stringkERV0U4, uintwcmEPf6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerBGK8acJ = await vnxManager.new({from: accounts[3]});
		const addressD0P01Cm = accounts[2]
		const address3DGgPH = accounts[1]
//		const boolEhelqS = await vnxManagerBGK8acJ.transferContractOwnership.call(address3DGgPH, addressD0P01Cm, {from: accounts[4]});
//		await vnxManagerBGK8acJ.renounceOwnership.call({from: accounts[2]});
//		await vnxManagerBGK8acJ.renounceOwnership.call({from: accounts[3]});
//		await vnxManagerBGK8acJ.onlyOwner.call({from: accounts[3]});

		await expect(vnxManagerBGK8acJ.transferContractOwnership.call(address3DGgPH, addressD0P01Cm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerhi4TLWA = await vnxManager.new({from: accounts[3]});
		const uinto0jYDJl = BigInt("1617")
		const addressknQA8yj = accounts[3]
//		const addressp5Mv6HR = await vnxManagerhi4TLWA.addBearer.call(addressknQA8yj, uinto0jYDJl, {from: accounts[1]});
//		const uint256iSFJUhx = await vnxManagerhi4TLWA.totalRoles.call({from: accounts[0]});
//		const addressmr5d2G0 = await vnxManagerhi4TLWA.owner.call({from: accounts[3]});
//		const boolq2okrm = await vnxManagerhi4TLWA.isAdmin.call({from: accounts[0]});

		await expect(vnxManagerhi4TLWA.addBearer.call(addressknQA8yj, uinto0jYDJl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagertXOBz7 = await vnxManager.new({from: accounts[5]});
		const addressIV0XkHt = "0x0000000000000000000000000000000000000001"
		const addresszq71F7Q = accounts[0]
		const stringsF4rpby = "FkAVaBTnQhH8b5JTrJutNH47MsyHh0Tgkcw3Y72eB0hyz8AGOHWRwuaNvbrYa33GLqcw"
//		await vnxManagertXOBz7.renounceOwnership.call({from: accounts[5]});
//		const address2P6Jcg = await vnxManagertXOBz7.owner.call({from: accounts[3]});
//		const boola9PHJGx = await vnxManagertXOBz7.transferContractOwnership.call(addresszq71F7Q, addressIV0XkHt, {from: accounts[1]});
//		const uint256OpFGONY = await vnxManagertXOBz7.addRootRole.call(stringsF4rpby, {from: accounts[1]});
//		const boolsMS5cZV = await vnxManagertXOBz7.isAdmin.call({from: accounts[2]});

		await expect(vnxManagertXOBz7.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagermT8zHfo = await vnxManager.new({from: accounts[0]});
		const stringGBznXhH = "G9mfOM8QDLmkd9uL3uiLWGFfsY5"
		const addressY5p9UsV = accounts[0]
		const address2sxhsh = accounts[0]
		const boolCGXRhXs = await vnxManagermT8zHfo.isAdmin.call({from: accounts[2]});
		const uint256qSI4sOa = await vnxManagermT8zHfo.addRootRole.call(stringGBznXhH, {from: accounts[1]});
//		const boolPz9gv7 = await vnxManagermT8zHfo.transferContractOwnership.call(address2sxhsh, addressY5p9UsV, {from: accounts[0]});
//		const uint256hcjadYp = await vnxManagermT8zHfo.totalRoles.call({from: accounts[0]});

		assert.equal(boolCGXRhXs, false)
		assert.equal(uint256qSI4sOa, BigInt("0"))
		await expect(vnxManagermT8zHfo.transferContractOwnership.call(address2sxhsh, addressY5p9UsV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerihZ93mx = await vnxManager.new({from: accounts[3]});
		const uinto4IiDZ9 = BigInt("2044")
		const addressiCwXCx7 = accounts[1]
		const uintMjWFDMh = BigInt("777")
		const addressxOY2HU3 = accounts[4]
		const uintqKdVvM = BigInt("418")
		const addressVKdGee3 = accounts[0]
		const uintA5kG0Aq = BigInt("1697")
		const stringU1Dtooi = "FpdorrcPZJsz7J0kgv7gLfYKEafLF"
		const boolNagOGjJ = await vnxManagerihZ93mx.hasRole.call(addressiCwXCx7, uinto4IiDZ9, {from: accounts[2]});
		const boollo6D9G7 = await vnxManagerihZ93mx.isOwner.call({from: accounts[2]});
//		const addressNNW6UsL = await vnxManagerihZ93mx.removeBearer.call(addressxOY2HU3, uintMjWFDMh, {from: accounts[2]});
//		const address9nlLZF = await vnxManagerihZ93mx.addBearer.call(addressVKdGee3, uintqKdVvM, {from: accounts[0]});
//		const uint256YOUxZjE = await vnxManagerihZ93mx.addRole.call(stringU1Dtooi, uintA5kG0Aq, {from: accounts[1]});

		assert.equal(boolNagOGjJ, false)
		assert.equal(boollo6D9G7, false)
		await expect(vnxManagerihZ93mx.removeBearer.call(addressxOY2HU3, uintMjWFDMh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagert17RTeV = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const addressuumM6c1 = accounts[1]
		const addressuvnjCaf = accounts[1]
		const addresshv99tpe = accounts[0]
		const boolfBqHqxq = await vnxManagert17RTeV.isAdmin.call({from: accounts[0]});
		const boolzVTpGRx = await vnxManagert17RTeV.isAdmin.call({from: accounts[4]});
		const boolNNOmhDn = await vnxManagert17RTeV.transferContractOwnership.call(addressuvnjCaf, addressuumM6c1, {from: accounts[1]});
		const addressVioe2N = await vnxManagert17RTeV.transferOwnership.call(addresshv99tpe, {from: accounts[3]});
		await vnxManagert17RTeV.onlyOwner.call({from: accounts[5]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerihZ93mx = await vnxManager.new({from: accounts[3]});
		const uintjRriqTc = BigInt("1709")
		const stringU1Dtooi = "FpdorrcPZPJsz7J0kgv7gLfYKEafLF"
		const uint256ZFoWy1 = await vnxManagerihZ93mx.totalRoles.call({from: accounts[1]});
//		const uint256YOUxZjE = await vnxManagerihZ93mx.addRole.call(stringU1Dtooi, uintjRriqTc, {from: accounts[1]});

		assert.equal(uint256ZFoWy1, BigInt("1"))
		await expect(vnxManagerihZ93mx.addRole.call(stringU1Dtooi, uintjRriqTc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerihZ93mx = await vnxManager.new({from: accounts[3]});
		const addressuhMiFml = accounts[3]
		const uintN9wxClG = BigInt("1674")
		const stringU1Dtooi = "FpdorrcPZPJsz7J0kgv7gLfYKEafLF"
		const addressFGn6TB = await vnxManagerihZ93mx.transferOwnership.call(addressuhMiFml, {from: accounts[3]});
//		const uint256YOUxZjE = await vnxManagerihZ93mx.addRole.call(stringU1Dtooi, uintN9wxClG, {from: accounts[1]});

		await expect(vnxManagerihZ93mx.addRole.call(stringU1Dtooi, uintN9wxClG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})