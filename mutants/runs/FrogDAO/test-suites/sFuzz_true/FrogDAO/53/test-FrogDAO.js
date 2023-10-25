const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOoieicsV = await FrogDAO.new({from: accounts[0]});
		const uinteEQqZr = BigInt("919")
		const addressYJgpGiq = "0x0000000000000000000000000000000000000001"
		const uintyRPlGrZ = BigInt("497")
		const addressTElC6cw = accounts[0]
		const uintvB0vmdI = BigInt("1129")
		const uintloUeqCc = BigInt("81")
		const boolVnQVlhC = await FrogDAOoieicsV.approve.call(addressYJgpGiq, uinteEQqZr, {from: accounts[5]});
		const boolUArZSP9 = await FrogDAOoieicsV.transfer.call(addressTElC6cw, uintyRPlGrZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintTEnaJ9 = await FrogDAOoieicsV.safeAdd.call(uintloUeqCc, uintvB0vmdI, {from: accounts[1]});

		assert.equal(boolVnQVlhC, true)
		await expect(FrogDAOoieicsV.transfer.call(addressTElC6cw, uintyRPlGrZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOIvUOFcE = await FrogDAO.new({from: accounts[1]});
		const addressbJJHGuA = accounts[0]
		const uintW8yPp4D = BigInt("326")
		const uintPz81FMm = BigInt("653")
		const uintnMA0aFA = BigInt("1116")
		const uintVafyWCb = BigInt("1219")
		const uinty93OWM = BigInt("515")
		const uintwUyeNsj = BigInt("271")
		const uintIVW6Hjj = await FrogDAOIvUOFcE.balanceOf.call(addressbJJHGuA, {from: accounts[4]});
		const uint0uWsEU = await FrogDAOIvUOFcE.safeSub.call(uintPz81FMm, uintW8yPp4D, {from: accounts[0]});
		const uintrRVdbqv = await FrogDAOIvUOFcE.safeDiv.call(uintVafyWCb, uintnMA0aFA, {from: accounts[2]});
		const uintGhr7sux = await FrogDAOIvUOFcE.safeDiv.call(uintwUyeNsj, uinty93OWM, {from: accounts[2]});

		assert.equal(uint0uWsEU, BigInt("327"))
		assert.equal(uintGhr7sux, BigInt("0"))
		assert.equal(uintIVW6Hjj, BigInt("0"))
		assert.equal(uintrRVdbqv, BigInt("1"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOOgRzxII = await FrogDAO.new({from: accounts[4]});
		const addressJnPzXAW = accounts[3]
		const addressHFyrazO = accounts[1]
		const uintzbhovtH = await FrogDAOOgRzxII.allowance.call(addressHFyrazO, addressJnPzXAW, {from: accounts[1]});
		const uintrfekIs3 = await FrogDAOOgRzxII.totalSupply.call({from: accounts[3]});
		const uintrJKO7K8 = await FrogDAOOgRzxII.totalSupply.call({from: accounts[1]});

		assert.equal(uintrJKO7K8, BigInt("1000000000000000000000000"))
		assert.equal(uintrfekIs3, BigInt("1000000000000000000000000"))
		assert.equal(uintzbhovtH, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOTtroLE2 = await FrogDAO.new({from: accounts[5]});
		const uint6VafCN = BigInt("435")
		const addressQ4z80lP = accounts[0]
		const uinto54voVz = BigInt("1394")
		const uintuXZ21lr = BigInt("81")
		const uintXRiWxSV = BigInt("1276")
		const addressVhvz3QC = accounts[3]
		const addressWcZBdzu = accounts[4]
		const boolomBqeFl = await FrogDAOTtroLE2.approve.call(addressQ4z80lP, uint6VafCN, {from: accounts[0]});
		const uintEslpTBi = await FrogDAOTtroLE2.safeDiv.call(uintuXZ21lr, uinto54voVz, {from: accounts[2]});
		const boolpSDoMiq = await FrogDAOTtroLE2.transfer.call(addressVhvz3QC, uintXRiWxSV, {from: accounts[5]});
		const uintG0uHu1J = await FrogDAOTtroLE2.balanceOf.call(addressWcZBdzu, {from: accounts[1]});

		assert.equal(boolomBqeFl, true)
		assert.equal(boolpSDoMiq, true)
		assert.equal(uintEslpTBi, BigInt("0"))
		assert.equal(uintG0uHu1J, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOIRHUJZA = await FrogDAO.new({from: accounts[0]});
		const uintgv1UBlY = BigInt("1025")
		const addressN4DDLT = accounts[2]
		const addressXAeUfG9 = accounts[2]
		const addresszhWCAx7 = accounts[3]
		const addressz66NSk2 = accounts[1]
		const addressa9rKDR = accounts[0]
		const addressnHtPXLJ = accounts[3]
		const boolICpeUeO = await FrogDAOIRHUJZA.transferFrom.call(addressXAeUfG9, addressN4DDLT, uintgv1UBlY, {from: accounts[5]});
		const uintpAtyZJ = await FrogDAOIRHUJZA.allowance.call(addressz66NSk2, addresszhWCAx7, {from: accounts[0]});
		const uintZ47kXrz = await FrogDAOIRHUJZA.allowance.call(addressnHtPXLJ, addressa9rKDR, {from: accounts[4]});

		await expect(FrogDAOIRHUJZA.transferFrom.call(addressXAeUfG9, addressN4DDLT, uintgv1UBlY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOfMZ7Km8 = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJUtg5VK = BigInt("1157")
		const addresskjeZXx5 = accounts[4]
		const uintoSYDQR6 = BigInt("742")
		const uintIvSNxUZ = BigInt("114")
		const uintySRjnNh = BigInt("1842")
		const uintlt1hHxK = BigInt("294")
		const uintV5Bs7qc = BigInt("1189")
		const uintpMb4UVm = BigInt("606")
		const addressJ7PtCN = "0x0000000000000000000000000000000000000001"
		const boolMReVA2m = await FrogDAOfMZ7Km8.approve.call(addresskjeZXx5, uintJUtg5VK, {from: accounts[2]});
		const uintm040yQ = await FrogDAOfMZ7Km8.safeSub.call(uintIvSNxUZ, uintoSYDQR6, {from: accounts[0]});
		const uintNb0Q5Hv = await FrogDAOfMZ7Km8.safeAdd.call(uintlt1hHxK, uintySRjnNh, {from: accounts[4]});
		const uintBa78J3 = await FrogDAOfMZ7Km8.safeMul.call(uintpMb4UVm, uintV5Bs7qc, {from: accounts[1]});
		const uintund5hCZ = await FrogDAOfMZ7Km8.balanceOf.call(addressJ7PtCN, {from: accounts[1]});
	});
})