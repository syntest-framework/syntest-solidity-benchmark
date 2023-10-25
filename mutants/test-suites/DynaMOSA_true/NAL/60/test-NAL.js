const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALwXhr5s = await NAL.new({from: accounts[2]});
		const addressPmVjZuD = accounts[4]
		const addressDq6rseD = accounts[2]
		const addressM2oZ78 = accounts[1]
		const addressTrNQh58 = accounts[0]
		const boolPlIcvtk = await NALwXhr5s.paused.call({from: accounts[3]});
//		const addressyzor1Ls = await NALwXhr5s.upgradeTo.call(addressPmVjZuD, {from: accounts[4]});
//		const addresslLKfPO8 = await NALwXhr5s.removeAdmin.call(addressDq6rseD, {from: accounts[3]});
//		await NALwXhr5s.whenPaused.call({from: accounts[3]});
//		const uint256ULHso2 = await NALwXhr5s.allowance.call(addressTrNQh58, addressM2oZ78, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolPlIcvtk, false)
		await expect(NALwXhr5s.upgradeTo.call(addressPmVjZuD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALAEGXBBS = await NAL.new({from: accounts[4]});
		const uintj6ldXR8 = BigInt("1845")
		const uinteghsbDQ = BigInt("1388")
		const addressqpn6Z1E = accounts[4]
		const uintypxuZVP = BigInt("764")
		const addressxHUo69s = accounts[0]
		const addresscuNTjH = accounts[4]
		const uintXkjPxUW = BigInt("226")
		const uintNsaUE2 = BigInt("872")
		const addressXPrMIVC = accounts[1]
		const addressv8Fo8as = accounts[2]
//		const boolJQ5ypw6 = await NALAEGXBBS.transferWithLock.call(addressqpn6Z1E, uinteghsbDQ, uintj6ldXR8, {from: accounts[3]});
//		const boolS7YdEOf = await NALAEGXBBS.transferFrom.call(addresscuNTjH, addressxHUo69s, uintypxuZVP, {from: accounts[1]});
//		await NALAEGXBBS.renounceAdmin.call({from: accounts[2]});
//		const boolO0nbFHd = await NALAEGXBBS.transferWithLock.call(addressXPrMIVC, uintNsaUE2, uintXkjPxUW, {from: accounts[2]});
//		const booll5vylPS = await NALAEGXBBS.isOwner.call(addressv8Fo8as, {from: accounts[4]});

		await expect(NALAEGXBBS.transferWithLock.call(addressqpn6Z1E, uinteghsbDQ, uintj6ldXR8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const addressi15oLBI = accounts[4]
		const uintm7VOkdn = BigInt("1652")
		const addresswjfV9JZ = accounts[3]
		const addressm6xnOn = accounts[4]
		const stringfayQRXb = await NALxUg3Wqs.name.call({from: accounts[1]});
		const uint256M9VzdAW = await NALxUg3Wqs.balanceOf.call(addressi15oLBI, {from: accounts[2]});
//		const boolFpRdYww = await NALxUg3Wqs.transfer.call(addresswjfV9JZ, uintm7VOkdn, {from: "0x0000000000000000000000000000000000000001"});
//		const addressEqVDXS = await NALxUg3Wqs.removeAdmin.call(addressm6xnOn, {from: accounts[1]});

		assert.equal(stringfayQRXb, "Personal Token")
		assert.equal(uint256M9VzdAW, BigInt("0"))
		await expect(NALxUg3Wqs.transfer.call(addresswjfV9JZ, uintm7VOkdn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkVwPlAc = await NAL.new({from: accounts[0]});
		const uintnqRRK7D = BigInt("1532")
		const addressb1HUZ3S = accounts[5]
		const addressKwGmZP1 = "0x0000000000000000000000000000000000000001"
		const uintshTEhpL = BigInt("1075")
		const addresszk2wZSc = accounts[1]
		const uintCzg31DT = BigInt("1507")
		const addressQMT4CD = accounts[3]
		const uintPKcvnfJ = BigInt("1554")
		const addressYNT5zMd = accounts[4]
//		const boolpGP36kr = await NALkVwPlAc.transferFrom.call(addressKwGmZP1, addressb1HUZ3S, uintnqRRK7D, {from: accounts[5]});
//		const boolSPGgRl = await NALkVwPlAc.decreaseAllowance.call(addresszk2wZSc, uintshTEhpL, {from: accounts[2]});
//		await NALkVwPlAc.onlyOwner.call({from: accounts[5]});
//		const boolrOOK3fA = await NALkVwPlAc.approve.call(addressQMT4CD, uintCzg31DT, {from: accounts[3]});
//		const boolArlVJJq = await NALkVwPlAc.decreaseAllowance.call(addressYNT5zMd, uintPKcvnfJ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256WNZeysj = await NALkVwPlAc.totalSupply.call({from: accounts[2]});

		await expect(NALkVwPlAc.transferFrom.call(addressKwGmZP1, addressb1HUZ3S, uintnqRRK7D, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringpCzb8w = "6a7boOzknhKksymz2haerJK4dtCcX"
		const stringQFfxRCo = "ltEgH4n9wTVKixdVQs256K1ninmfTeUww8fRye1"
		const uintrr83m9J = BigInt("105")
		const NALIEeRg4C = await NAL.new(stringpCzb8w, stringQFfxRCo, uintrr83m9J, {from: accounts[4]});
		const uinty9v62jP = BigInt("1809")
		const addressqrRd3D = "0x0000000000000000000000000000000000000001"
		const uintNODRsDr = BigInt("1269")
		const addressDaZJVUb = accounts[3]
		const addressHi2dWFs = await NALIEeRg4C.burnFrom.call(addressqrRd3D, uinty9v62jP, {from: accounts[4]});
		const bools4kdIa = await NALIEeRg4C.transfer.call(addressDaZJVUb, uintNODRsDr, {from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALYQh7bvj = await NAL.new({from: accounts[1]});
		const addresslXUiZQO = accounts[0]
		const uintULO1i26 = BigInt("1623")
		const addressizTnESf = "0x0000000000000000000000000000000000000000"
		const addressj9ayq4C = accounts[4]
		const addresskmq2pDO = accounts[3]
		const boolpvUFNze = await NALYQh7bvj.isOwner.call(addresslXUiZQO, {from: accounts[2]});
//		const uint256Pja3dUK = await NALYQh7bvj.burn.call(uintULO1i26, {from: accounts[0]});
//		const address6H6CRo = await NALYQh7bvj.addAdmin.call(addressizTnESf, {from: accounts[3]});
//		const uint256v1ls7OP = await NALYQh7bvj.allowance.call(addresskmq2pDO, addressj9ayq4C, {from: accounts[3]});

		assert.equal(boolpvUFNze, false)
		await expect(NALYQh7bvj.burn.call(uintULO1i26, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm6IgRax = await NAL.new({from: accounts[1]});
		const addressgBinlxb = accounts[4]
		const addressa8Ffny2 = accounts[3]
		const addressHLjdGvh = accounts[0]
		const uintAvWi2O = BigInt("675")
		const addressjrpVjly = accounts[2]
		const addressWQGhUQK = await NALm6IgRax.transferOwnership.call(addressgBinlxb, {from: accounts[1]});
//		const boolRStii0k = await NALm6IgRax.unfreezeAccount.call(addressa8Ffny2, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256i8saloC = await NALm6IgRax.balanceOf.call(addressHLjdGvh, {from: accounts[1]});
//		const boolTpCb4dZ = await NALm6IgRax.unlock.call(addressjrpVjly, uintAvWi2O, {from: accounts[5]});
//		await NALm6IgRax.whenPaused.call({from: accounts[1]});

		await expect(NALm6IgRax.unfreezeAccount.call(addressa8Ffny2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALm6IgRax = await NAL.new({from: accounts[1]});
		const addressGQ3QTyz = accounts[4]
		const addressCFjRPoO = accounts[2]
		const addressPLTf4gZ = accounts[0]
		const addressL8Ohopl = accounts[2]
		const addressDMknwMC = accounts[3]
		const addressmiemLc = accounts[0]
		const uintzYn1tO = BigInt("675")
		const addressUOSHKT7 = accounts[3]
		const addressWQGhUQK = await NALm6IgRax.transferOwnership.call(addressGQ3QTyz, {from: accounts[1]});
		const boolD9gNCiz = await NALm6IgRax.isOwner.call(addressCFjRPoO, {from: accounts[1]});
		const uint256k0tD1n6 = await NALm6IgRax.allowance.call(addressL8Ohopl, addressPLTf4gZ, {from: accounts[4]});
//		const boolRStii0k = await NALm6IgRax.unfreezeAccount.call(addressDMknwMC, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256i8saloC = await NALm6IgRax.balanceOf.call(addressmiemLc, {from: accounts[1]});
//		const boolTpCb4dZ = await NALm6IgRax.unlock.call(addressUOSHKT7, uintzYn1tO, {from: accounts[5]});
//		await NALm6IgRax.whenPaused.call({from: accounts[1]});

		assert.equal(boolD9gNCiz, false)
		assert.equal(uint256k0tD1n6, BigInt("0"))
		await expect(NALm6IgRax.unfreezeAccount.call(addressDMknwMC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const addresstFuv8IO = accounts[4]
		const uintMF0syMF = BigInt("1652")
		const addressTbtPMNQ = accounts[3]
		const addresso1gqnlu = accounts[4]
//		await NALxUg3Wqs.onlyOwner.call({from: accounts[4]});
//		const stringfayQRXb = await NALxUg3Wqs.name.call({from: accounts[1]});
//		const uint256M9VzdAW = await NALxUg3Wqs.balanceOf.call(addresstFuv8IO, {from: accounts[2]});
//		const boolFpRdYww = await NALxUg3Wqs.transfer.call(addressTbtPMNQ, uintMF0syMF, {from: "0x0000000000000000000000000000000000000001"});
//		const addressEqVDXS = await NALxUg3Wqs.removeAdmin.call(addresso1gqnlu, {from: accounts[1]});

		await expect(NALxUg3Wqs.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const addressADg78GK = accounts[4]
		const addresskybRBw = accounts[2]
		const stringfayQRXb = await NALxUg3Wqs.name.call({from: accounts[1]});
		const uint256M9VzdAW = await NALxUg3Wqs.balanceOf.call(addressADg78GK, {from: accounts[2]});
//		const addressEqVDXS = await NALxUg3Wqs.removeAdmin.call(addresskybRBw, {from: accounts[1]});

		assert.equal(stringfayQRXb, "Personal Token")
		assert.equal(uint256M9VzdAW, BigInt("0"))
		await expect(NALxUg3Wqs.removeAdmin.call(addresskybRBw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkVwPlAc = await NAL.new({from: accounts[0]});
		const uinttr5cZiP = BigInt("1532")
		const addressPdrtMe6 = accounts[5]
		const addressaH5IUo = "0x0000000000000000000000000000000000000001"
		const uintpQSVY0 = BigInt("1075")
		const addressdKTuEK = accounts[1]
		const uintzeJRJ5L = BigInt("1507")
		const addressdWCbOqL = accounts[3]
		const uintmlRyyOz = BigInt("1554")
		const addressIPdgBTn = accounts[4]
		const uintHLA3HSG = BigInt("600")
		const addressP5Z7bKD = accounts[6]
		const addressfALmIT = accounts[1]
		const uint256PmYVDO5 = await NALkVwPlAc.totalSupply.call({from: accounts[3]});
//		const boolpGP36kr = await NALkVwPlAc.transferFrom.call(addressaH5IUo, addressPdrtMe6, uinttr5cZiP, {from: accounts[5]});
//		const boolSPGgRl = await NALkVwPlAc.decreaseAllowance.call(addressdKTuEK, uintpQSVY0, {from: accounts[2]});
//		await NALkVwPlAc.onlyOwner.call({from: accounts[5]});
//		const boolrOOK3fA = await NALkVwPlAc.approve.call(addressdWCbOqL, uintzeJRJ5L, {from: accounts[3]});
//		const boolJLgxBmG = await NALkVwPlAc.paused.call({from: accounts[2]});
//		const boolArlVJJq = await NALkVwPlAc.decreaseAllowance.call(addressIPdgBTn, uintmlRyyOz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolclL86Sx = await NALkVwPlAc.transferFrom.call(addressfALmIT, addressP5Z7bKD, uintHLA3HSG, {from: accounts[2]});
//		const uint256WNZeysj = await NALkVwPlAc.totalSupply.call({from: accounts[2]});

		assert.equal(uint256PmYVDO5, BigInt("2000000000000000000000000000"))
		await expect(NALkVwPlAc.transferFrom.call(addressaH5IUo, addressPdrtMe6, uinttr5cZiP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYQh7bvj = await NAL.new({from: accounts[1]});
		const addressFEJM2FF = accounts[0]
		const uintZlYqhv = BigInt("2015")
		const addressNMwsj3F = "0x0000000000000000000000000000000000000001"
		const addressDVVipXn = "0x0000000000000000000000000000000000000001"
		const addressbnj5EtW = accounts[4]
		const addressvekqY9N = accounts[4]
		const boolpvUFNze = await NALYQh7bvj.isOwner.call(addressFEJM2FF, {from: accounts[2]});
		const booloYUbG8a = await NALYQh7bvj.increaseAllowance.call(addressNMwsj3F, uintZlYqhv, {from: accounts[1]});
//		const address6H6CRo = await NALYQh7bvj.addAdmin.call(addressDVVipXn, {from: accounts[3]});
//		await NALYQh7bvj.pause.call({from: accounts[2]});
//		const uint256v1ls7OP = await NALYQh7bvj.allowance.call(addressvekqY9N, addressbnj5EtW, {from: accounts[3]});

		assert.equal(booloYUbG8a, true)
		assert.equal(boolpvUFNze, false)
		await expect(NALYQh7bvj.addAdmin.call(addressDVVipXn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const uintGkLooyD = BigInt("827")
		const addresspBWTVA2 = accounts[3]
//		const boolgQupkDR = await NALxUg3Wqs.decreaseAllowance.call(addresspBWTVA2, uintGkLooyD, {from: accounts[2]});
//		const stringfayQRXb = await NALxUg3Wqs.name.call({from: accounts[1]});

		await expect(NALxUg3Wqs.decreaseAllowance.call(addresspBWTVA2, uintGkLooyD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkVwPlAc = await NAL.new({from: accounts[0]});
		const addressl6qvdtI = accounts[0]
		const uintdhFuiFl = BigInt("1532")
		const addressWFyyxnD = accounts[5]
		const addresstYbtQtb = "0x0000000000000000000000000000000000000001"
		const uint8jsJf8FK = await NALkVwPlAc.decimals.call({from: accounts[5]});
		const bool6pgSck = await NALkVwPlAc.isOwner.call(addressl6qvdtI, {from: accounts[1]});
//		const boolpGP36kr = await NALkVwPlAc.transferFrom.call(addresstYbtQtb, addressWFyyxnD, uintdhFuiFl, {from: accounts[5]});
//		await NALkVwPlAc.onlyOwner.call({from: accounts[5]});
//		const uint256WNZeysj = await NALkVwPlAc.totalSupply.call({from: accounts[2]});

		assert.equal(bool6pgSck, true)
		assert.equal(uint8jsJf8FK, BigInt("18"))
		await expect(NALkVwPlAc.transferFrom.call(addresstYbtQtb, addressWFyyxnD, uintdhFuiFl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const uintfuPybhI = BigInt("1954")
		const addresslCMS4I = "0x0000000000000000000000000000000000000001"
		const addressld1ieZ8 = accounts[2]
		const addressfdM0RTQ = accounts[4]
		const addresssCwMC8s = accounts[3]
		const uint256EvuTe7 = await NALxUg3Wqs.totalSupply.call({from: accounts[3]});
		const stringfayQRXb = await NALxUg3Wqs.name.call({from: accounts[1]});
		const booloqwVzK2 = await NALxUg3Wqs.approve.call(addresslCMS4I, uintfuPybhI, {from: accounts[4]});
//		const boolVT39ADo = await NALxUg3Wqs.freezeAccount.call(addressld1ieZ8, {from: accounts[5]});
//		const uint256M9VzdAW = await NALxUg3Wqs.balanceOf.call(addressfdM0RTQ, {from: accounts[2]});
//		const addressEqVDXS = await NALxUg3Wqs.removeAdmin.call(addresssCwMC8s, {from: accounts[1]});

		assert.equal(booloqwVzK2, true)
		assert.equal(stringfayQRXb, "Personal Token")
		assert.equal(uint256EvuTe7, BigInt("2000000000000000000000000000"))
		await expect(NALxUg3Wqs.freezeAccount.call(addressld1ieZ8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYDibCc = await NAL.new({from: accounts[1]});
		const uinto5KNVvZ = BigInt("1901")
		const addressP5wIaE = accounts[5]
		const addressuCIo53c = accounts[0]
		const addressKop0UCu = accounts[1]
		const uintQz6Q41M = BigInt("1842")
		const addressMekBFiK = "0x0000000000000000000000000000000000000001"
		const uintB3mH3qY = BigInt("1647")
		const uintinD9FGG = BigInt("1337")
		const addressi99jNni = accounts[4]
		const boolUfkXabO = await NALYDibCc.approve.call(addressP5wIaE, uinto5KNVvZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RcJNhgf = await NALYDibCc.allowance.call(addressKop0UCu, addressuCIo53c, {from: accounts[3]});
//		const addressdiY2cJW = await NALYDibCc.burnFrom.call(addressMekBFiK, uintQz6Q41M, {from: accounts[1]});
//		const boolFP297Lu = await NALYDibCc.transferWithLock.call(addressi99jNni, uintinD9FGG, uintB3mH3qY, {from: accounts[3]});

		assert.equal(boolUfkXabO, true)
		assert.equal(uint256RcJNhgf, BigInt("0"))
		await expect(NALYDibCc.burnFrom.call(addressMekBFiK, uintQz6Q41M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALIPTTJU5 = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBIVpPCn = BigInt("1369")
		const addressnbZgIK1 = accounts[0]
		const addressA31i778 = accounts[3]
		const uintwpCTD5f = BigInt("1002")
		const addressrubPJfa = accounts[3]
		const boolVGeV3k0 = await NALIPTTJU5.approve.call(addressnbZgIK1, uintBIVpPCn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eGX1hYJ = await NALIPTTJU5.balanceOf.call(addressA31i778, {from: accounts[1]});
		const boolpF63ynr = await NALIPTTJU5.increaseAllowance.call(addressrubPJfa, uintwpCTD5f, {from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const addressWFF95iu = accounts[1]
		const addressDDHLhd = accounts[3]
		const addressQeJbX7w = accounts[4]
		const stringgx9Cp1 = await NALxUg3Wqs.symbol.call({from: accounts[0]});
		const stringfayQRXb = await NALxUg3Wqs.name.call({from: accounts[1]});
		const uint256vwACe8t = await NALxUg3Wqs.allowance.call(addressDDHLhd, addressWFF95iu, {from: accounts[2]});
//		const addressEqVDXS = await NALxUg3Wqs.removeAdmin.call(addressQeJbX7w, {from: accounts[1]});

		assert.equal(stringfayQRXb, "Personal Token")
		assert.equal(stringgx9Cp1, "NAL")
		assert.equal(uint256vwACe8t, BigInt("0"))
		await expect(NALxUg3Wqs.removeAdmin.call(addressQeJbX7w, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const uintxIpwnPA = BigInt("1141")
		const uintJmL6CU3 = BigInt("630")
		const addressGaW4hAL = accounts[4]
		const addressAO9sv2D = accounts[3]
		const boolzE9D8Kn = await NALxUg3Wqs.transferWithLock.call(addressGaW4hAL, uintJmL6CU3, uintxIpwnPA, {from: accounts[1]});
		const uint256EvuTe7 = await NALxUg3Wqs.totalSupply.call({from: accounts[3]});
		const stringXuEPnpw = await NALxUg3Wqs.symbol.call({from: accounts[4]});
		const stringfayQRXb = await NALxUg3Wqs.name.call({from: accounts[1]});
//		const addressEqVDXS = await NALxUg3Wqs.removeAdmin.call(addressAO9sv2D, {from: accounts[1]});

		assert.equal(boolzE9D8Kn, true)
		assert.equal(stringXuEPnpw, "NAL")
		assert.equal(stringfayQRXb, "Personal Token")
		assert.equal(uint256EvuTe7, BigInt("2000000000000000000000000000"))
		await expect(NALxUg3Wqs.removeAdmin.call(addressAO9sv2D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const addressRE6VVtO = accounts[3]
		const stringfayQRXb = await NALxUg3Wqs.name.call({from: accounts[1]});
//		await NALxUg3Wqs.renounceAdmin.call({from: accounts[3]});
//		const addressEqVDXS = await NALxUg3Wqs.removeAdmin.call(addressRE6VVtO, {from: accounts[1]});

		assert.equal(stringfayQRXb, "Personal Token")
		await expect(NALxUg3Wqs.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const addressxmmG6IG = accounts[5]
		const addressVM5n8I5 = accounts[2]
//		await NALxUg3Wqs.pause.call({from: accounts[1]});
//		const uint256M9VzdAW = await NALxUg3Wqs.balanceOf.call(addressxmmG6IG, {from: accounts[2]});
//		const boolcANbM3I = await NALxUg3Wqs.isOwner.call(addressVM5n8I5, {from: accounts[0]});

		await expect(NALxUg3Wqs.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const addressDGEUVbl = accounts[0]
		const addressY2iE7Ed = "0x0000000000000000000000000000000000000001"
		const addressNTXnSs = accounts[5]
		const addressKwzZuoo = await NALxUg3Wqs.upgradeTo.call(addressDGEUVbl, {from: accounts[1]});
		const boolFWrGcL2 = await NALxUg3Wqs.isOwner.call(addressY2iE7Ed, {from: accounts[4]});
		const uint256M9VzdAW = await NALxUg3Wqs.balanceOf.call(addressNTXnSs, {from: accounts[2]});

		assert.equal(boolFWrGcL2, false)
		assert.equal(uint256M9VzdAW, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const addresstDqumdb = accounts[1]
		const addressaqjTzPZ = accounts[4]
		const stringfayQRXb = await NALxUg3Wqs.name.call({from: accounts[1]});
//		const addressg7CvJKK = await NALxUg3Wqs.addAdmin.call(addresstDqumdb, {from: accounts[1]});
//		const addressEqVDXS = await NALxUg3Wqs.removeAdmin.call(addressaqjTzPZ, {from: accounts[1]});

		assert.equal(stringfayQRXb, "Personal Token")
		await expect(NALxUg3Wqs.addAdmin.call(addresstDqumdb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkVwPlAc = await NAL.new({from: accounts[0]});
		const addressQf83Uul = accounts[0]
		const uinto5clGBO = BigInt("1532")
		const addresso686zoz = accounts[5]
		const addressJlTaoat = "0x0000000000000000000000000000000000000001"
		const boolWoA8IfN = await NALkVwPlAc.freezeAccount.call(addressQf83Uul, {from: accounts[0]});
//		const boolpGP36kr = await NALkVwPlAc.transferFrom.call(addressJlTaoat, addresso686zoz, uinto5clGBO, {from: accounts[5]});

		assert.equal(boolWoA8IfN, true)
		await expect(NALkVwPlAc.transferFrom.call(addressJlTaoat, addresso686zoz, uinto5clGBO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkVwPlAc = await NAL.new({from: accounts[0]});
		const uintNAtt148 = BigInt("1134")
		const uintVZ54BI = BigInt("990")
		const addressPvNSkTA = accounts[2]
		const addressX8pugbK = accounts[4]
		const uintait18m8 = BigInt("1534")
		const addresskUVsJfO = accounts[5]
		const addressvwjbMKx = "0x0000000000000000000000000000000000000001"
//		const boolYEZnEen = await NALkVwPlAc.lock.call(addressPvNSkTA, uintVZ54BI, uintNAtt148, {from: accounts[0]});
//		const boolxCfL6kH = await NALkVwPlAc.freezeAccount.call(addressX8pugbK, {from: accounts[2]});
//		const boolpGP36kr = await NALkVwPlAc.transferFrom.call(addressvwjbMKx, addresskUVsJfO, uintait18m8, {from: accounts[5]});
//		const uint8pzWoqR = await NALkVwPlAc.decimals.call({from: accounts[2]});

		await expect(NALkVwPlAc.lock.call(addressPvNSkTA, uintVZ54BI, uintNAtt148, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const uintyxp9zLa = BigInt("581")
		const addressWSTNDTr = accounts[3]
		const addressssdLa1X = accounts[5]
		const uintiMr3vwS = BigInt("1923")
		const addressg9qS9GO = accounts[0]
		const addressWhwAVms = accounts[5]
		const uintIaqEX8s = BigInt("1177")
		const addressPta4kMl = accounts[4]
		const addressqcmYYSE = accounts[3]
		const uint256EvuTe7 = await NALxUg3Wqs.totalSupply.call({from: accounts[3]});
		const boolno1zBH1 = await NALxUg3Wqs.transfer.call(addressWSTNDTr, uintyxp9zLa, {from: accounts[1]});
//		await NALxUg3Wqs.renounceAdmin.call({from: accounts[1]});
//		const stringfayQRXb = await NALxUg3Wqs.name.call({from: accounts[1]});
//		const uint256M9VzdAW = await NALxUg3Wqs.balanceOf.call(addressssdLa1X, {from: accounts[2]});
//		const booloogrdLA = await NALxUg3Wqs.approve.call(addressg9qS9GO, uintiMr3vwS, {from: accounts[3]});
//		const addressEqVDXS = await NALxUg3Wqs.removeAdmin.call(addressWhwAVms, {from: accounts[1]});
//		const boolKp2lYDY = await NALxUg3Wqs.transferFrom.call(addressqcmYYSE, addressPta4kMl, uintIaqEX8s, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolno1zBH1, true)
		assert.equal(uint256EvuTe7, BigInt("2000000000000000000000000000"))
		await expect(NALxUg3Wqs.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxUg3Wqs = await NAL.new({from: accounts[1]});
		const addressevQp8iC = accounts[1]
		const uintfsVjUsU = BigInt("1774")
		const uintucPCS6p = BigInt("204")
		const addressOJlZhuA = accounts[1]
		const uintKpTKqIX = BigInt("581")
		const addressyIuiOGs = accounts[3]
		const addressle7Rhlg = accounts[5]
		const uintShirgN = BigInt("1923")
		const addressC45cm7n = accounts[0]
		const uintSTZZyL = BigInt("1721")
		const uinteG0mnru = BigInt("1442")
		const addressBdTSdhz = "0x0000000000000000000000000000000000000001"
		const addressJm4CpBN = accounts[5]
		const uintdKVB5Oh = BigInt("1177")
		const addresskU0TpLr = accounts[4]
		const addressxhV1Ppz = accounts[3]
		const boollwwHPob = await NALxUg3Wqs.isOwner.call(addressevQp8iC, {from: accounts[1]});
		const boolxTao1Go = await NALxUg3Wqs.lock.call(addressOJlZhuA, uintucPCS6p, uintfsVjUsU, {from: accounts[1]});
		const uint256EvuTe7 = await NALxUg3Wqs.totalSupply.call({from: accounts[3]});
		const boolno1zBH1 = await NALxUg3Wqs.transfer.call(addressyIuiOGs, uintKpTKqIX, {from: accounts[1]});
		const uint256M9VzdAW = await NALxUg3Wqs.balanceOf.call(addressle7Rhlg, {from: accounts[2]});
		const booloogrdLA = await NALxUg3Wqs.approve.call(addressC45cm7n, uintShirgN, {from: accounts[3]});
//		const bools3HmtOu = await NALxUg3Wqs.lock.call(addressBdTSdhz, uinteG0mnru, uintSTZZyL, {from: accounts[0]});
//		const addressEqVDXS = await NALxUg3Wqs.removeAdmin.call(addressJm4CpBN, {from: accounts[1]});
//		const boolKp2lYDY = await NALxUg3Wqs.transferFrom.call(addressxhV1Ppz, addresskU0TpLr, uintdKVB5Oh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boollwwHPob, true)
		assert.equal(boolno1zBH1, true)
		assert.equal(booloogrdLA, true)
		assert.equal(boolxTao1Go, true)
		assert.equal(uint256EvuTe7, BigInt("2000000000000000000000000000"))
		assert.equal(uint256M9VzdAW, BigInt("0"))
		await expect(NALxUg3Wqs.lock.call(addressBdTSdhz, uinteG0mnru, uintSTZZyL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})