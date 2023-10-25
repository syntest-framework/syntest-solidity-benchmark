const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAmPzfTPG = await TPA.new({from: accounts[3]});
		const uintkDMaRg = BigInt("789")
		const addressUpiB9q = accounts[0]
//		await TPAmPzfTPG.onlyAdmin.call({from: accounts[1]});
//		await TPAmPzfTPG.pause.call({from: accounts[2]});
//		const boolGylfofm = await TPAmPzfTPG.decreaseAllowance.call(addressUpiB9q, uintkDMaRg, {from: accounts[0]});
//		await TPAmPzfTPG.renounceAdmin.call({from: accounts[2]});

		await expect(TPAmPzfTPG.onlyAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPArIVYxgo = await TPA.new({from: accounts[5]});
		const uintEC1V3fH = BigInt("1316")
		const addressbge9LZs = accounts[1]
//		await TPArIVYxgo.unpause.call({from: accounts[3]});
//		await TPArIVYxgo.whenNotPaused.call({from: accounts[4]});
//		await TPArIVYxgo.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolBNRKDyn = await TPArIVYxgo.transfer.call(addressbge9LZs, uintEC1V3fH, {from: accounts[4]});

		await expect(TPArIVYxgo.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const strings2w6QWA = "fZA5vGEPVqqAxnkQpfhq8hGGiLOGUVfLKIImuDRq0gWLMkQ5zhGa3aDULDP6EeZ3ro3t7M63snF7gnf4fmw9V2vTAqch7Cy"
		const stringIVroolz = "bVi2JPmQ"
		const uintvhdWcj = BigInt("147")
		const TPAUk7bHOe = await TPA.new(strings2w6QWA, stringIVroolz, uintvhdWcj, {from: accounts[3]});
		const uintshECKm0 = BigInt("1662")
		const addressxUPhz8x = accounts[2]
		const uint256zTK94l3 = await TPAUk7bHOe.totalSupply.call({from: accounts[1]});
		const booltGOD8XF = await TPAUk7bHOe.decreaseAllowance.call(addressxUPhz8x, uintshECKm0, {from: accounts[3]});
		await TPAUk7bHOe.onlyAdmin.call({from: accounts[1]});
	});

	it('test for TPA', async () => {
		const TPAFDiGJhe = await TPA.new({from: accounts[1]});
		const addressuEi2roK = accounts[4]
		const addressUsFJAAf = accounts[2]
		const addressdBxvEPR = accounts[0]
//		await TPAFDiGJhe.renounceAdmin.call({from: accounts[3]});
//		const addressGZXjd2L = await TPAFDiGJhe.removeAdmin.call(addressuEi2roK, {from: accounts[1]});
//		const addressJt5i5CQ = await TPAFDiGJhe.addAdmin.call(addressUsFJAAf, {from: accounts[1]});
//		const uint256fLbhrDs = await TPAFDiGJhe.balanceOf.call(addressdBxvEPR, {from: accounts[3]});

		await expect(TPAFDiGJhe.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintWRhdB8X = BigInt("17")
		const addressXWXSwD0 = "0x0000000000000000000000000000000000000001"
		const uintcxmtPK4 = BigInt("741")
		const addresskwkRcJ0 = accounts[1]
		const addressycZUMV = accounts[3]
//		const boolFZqfzAy = await TPAIb84Goj.transfer.call(addressXWXSwD0, uintWRhdB8X, {from: accounts[0]});
//		const boolucnqp7d = await TPAIb84Goj.unlock.call(addresskwkRcJ0, uintcxmtPK4, {from: accounts[2]});
//		const addressz27hCH = await TPAIb84Goj.addAdmin.call(addressycZUMV, {from: accounts[2]});

		await expect(TPAIb84Goj.transfer.call(addressXWXSwD0, uintWRhdB8X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintZp1N2XS = BigInt("17")
		const addressm74Bl4J = "0x0000000000000000000000000000000000000001"
		const addressyi6IML = accounts[3]
		const uint256ZIvoP9u = await TPAIb84Goj.totalSupply.call({from: accounts[3]});
//		const boolFZqfzAy = await TPAIb84Goj.transfer.call(addressm74Bl4J, uintZp1N2XS, {from: accounts[0]});
//		const addressz27hCH = await TPAIb84Goj.addAdmin.call(addressyi6IML, {from: accounts[2]});

		assert.equal(uint256ZIvoP9u, BigInt("10000000000000000000000000000"))
		await expect(TPAIb84Goj.transfer.call(addressm74Bl4J, uintZp1N2XS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAMU6140L = await TPA.new({from: accounts[1]});
		const uintsqb1L6U = BigInt("3")
		const addressdV1prlW = accounts[4]
//		const boolEulSsE = await TPAMU6140L.decreaseAllowance.call(addressdV1prlW, uintsqb1L6U, {from: accounts[5]});
//		const boolY98tIPA = await TPAMU6140L.paused.call({from: accounts[5]});
//		const uint8YSjerAr = await TPAMU6140L.decimals.call({from: accounts[1]});

		await expect(TPAMU6140L.decreaseAllowance.call(addressdV1prlW, uintsqb1L6U, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintBdenD9T = BigInt("306")
		const addressWiWemfv = accounts[5]
		const addressQDqaDQ = accounts[5]
		const uintHGtk7j5 = BigInt("11")
		const addressCqO37B = "0x0000000000000000000000000000000000000000"
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addressQDqaDQ, addressWiWemfv, uintBdenD9T, {from: accounts[1]});
//		const boolFZqfzAy = await TPAIb84Goj.transfer.call(addressCqO37B, uintHGtk7j5, {from: accounts[0]});

		await expect(TPAIb84Goj.transferFrom.call(addressQDqaDQ, addressWiWemfv, uintBdenD9T, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintsjyJWmH = BigInt("325")
		const uintjImwE5W = BigInt("1399")
		const addresswPy1rL = accounts[2]
		const uintdsU8rST = BigInt("11")
		const addressXuyUXkk = "0x0000000000000000000000000000000000000001"
//		const booliMmUBW = await TPAIb84Goj.lock.call(addresswPy1rL, uintjImwE5W, uintsjyJWmH, {from: accounts[4]});
//		const stringgnkeGqS = await TPAIb84Goj.symbol.call({from: accounts[0]});
//		const boolFZqfzAy = await TPAIb84Goj.transfer.call(addressXuyUXkk, uintdsU8rST, {from: accounts[0]});

		await expect(TPAIb84Goj.lock.call(addresswPy1rL, uintjImwE5W, uintsjyJWmH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintOa9ZSf = BigInt("1020")
		const addressOqfJImw = accounts[1]
		const uinthXdi3cc = BigInt("11")
		const addresstSmVK3G = "0x0000000000000000000000000000000000000002"
		const stringR49uVD = await TPAIb84Goj.symbol.call({from: accounts[4]});
//		const boolfle6jdt = await TPAIb84Goj.transfer.call(addressOqfJImw, uintOa9ZSf, {from: accounts[2]});
//		const boolFZqfzAy = await TPAIb84Goj.transfer.call(addresstSmVK3G, uinthXdi3cc, {from: accounts[0]});

		assert.equal(stringR49uVD, "TPA")
		await expect(TPAIb84Goj.transfer.call(addressOqfJImw, uintOa9ZSf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintgdBrABT = BigInt("11")
		const addresssswU6mU = "0x0000000000000000000000000000000000000000"
		const uint8Wqyajzs = await TPAIb84Goj.decimals.call({from: accounts[4]});
//		const boolFZqfzAy = await TPAIb84Goj.transfer.call(addresssswU6mU, uintgdBrABT, {from: accounts[0]});
//		const stringxER1bjs = await TPAIb84Goj.name.call({from: accounts[0]});

		assert.equal(uint8Wqyajzs, BigInt("18"))
		await expect(TPAIb84Goj.transfer.call(addresssswU6mU, uintgdBrABT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintkyoyok4 = BigInt("1928")
		const addressYYgADKv = accounts[1]
		const uintUdWBhuH = BigInt("11")
		const addressKZmoFRF = "0x0000000000000000000000000000000000000000"
		const boolgXK1iHr = await TPAIb84Goj.approve.call(addressYYgADKv, uintkyoyok4, {from: accounts[2]});
//		await TPAIb84Goj.onlyOwner.call({from: accounts[0]});
//		const boolFZqfzAy = await TPAIb84Goj.transfer.call(addressKZmoFRF, uintUdWBhuH, {from: accounts[0]});

		assert.equal(boolgXK1iHr, true)
		await expect(TPAIb84Goj.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAdHTeDd7 = await TPA.new({from: accounts[3]});
		const uintogN5tZt = BigInt("1070")
		const addressdexgWbt = accounts[2]
		const uinth5lvja = BigInt("1616")
		const addressqKOySWm = accounts[3]
		const uintSD1MqgW = BigInt("345")
		const addressfl1t2XU = accounts[2]
		const boolxK9PnNu = await TPAdHTeDd7.approve.call(addressdexgWbt, uintogN5tZt, {from: accounts[3]});
		const boolFSJyJvZ = await TPAdHTeDd7.approve.call(addressqKOySWm, uinth5lvja, {from: accounts[3]});
		const stringFQjCOir = await TPAdHTeDd7.name.call({from: accounts[1]});
//		const boolovWwF9J = await TPAdHTeDd7.decreaseAllowance.call(addressfl1t2XU, uintSD1MqgW, {from: accounts[3]});

		assert.equal(boolFSJyJvZ, true)
		assert.equal(boolxK9PnNu, true)
		assert.equal(stringFQjCOir, "TPA")
		await expect(TPAdHTeDd7.decreaseAllowance.call(addressfl1t2XU, uintSD1MqgW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const addressrCF2mkt = accounts[2]
		const addresskBBfOA9 = accounts[1]
		const uintbMrz9N9 = BigInt("306")
		const addresss5wNGN = accounts[6]
		const addressjUUAfWV = accounts[5]
		const stringSsSGpq8 = await TPAIb84Goj.symbol.call({from: accounts[2]});
		const uint256sH5CuO5 = await TPAIb84Goj.allowance.call(addresskBBfOA9, addressrCF2mkt, {from: accounts[3]});
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addressjUUAfWV, addresss5wNGN, uintbMrz9N9, {from: accounts[1]});

		assert.equal(stringSsSGpq8, "TPA")
		assert.equal(uint256sH5CuO5, BigInt("0"))
		await expect(TPAIb84Goj.transferFrom.call(addressjUUAfWV, addresss5wNGN, uintbMrz9N9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const addressk4UJN9d = accounts[3]
		const addressdQD3N7m = accounts[3]
		const uintoyPaNLU = BigInt("285")
		const addressCuPWPXw = accounts[5]
		const addressdwIU5VG = accounts[5]
		const uint256j6WSeoj = await TPAIb84Goj.balanceOf.call(addressk4UJN9d, {from: accounts[3]});
//		const boola4iKWt3 = await TPAIb84Goj.freezeAccount.call(addressdQD3N7m, {from: accounts[3]});
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addressdwIU5VG, addressCuPWPXw, uintoyPaNLU, {from: accounts[1]});

		assert.equal(uint256j6WSeoj, BigInt("0"))
		await expect(TPAIb84Goj.freezeAccount.call(addressdQD3N7m, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAZsCoseA = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const addressCR2MKIt = accounts[2]
		const uinttexW9hp = BigInt("552")
		const addresseVa7gFS = accounts[2]
		const uintgnPw49 = BigInt("284")
		const addressdd7Bgrv = "0x0000000000000000000000000000000000000001"
		const boolGlYtGBM = await TPAZsCoseA.freezeAccount.call(addressCR2MKIt, {from: accounts[0]});
		await TPAZsCoseA.unpause.call({from: accounts[3]});
		const boolLyGUF7g = await TPAZsCoseA.transfer.call(addresseVa7gFS, uinttexW9hp, {from: "0x0000000000000000000000000000000000000001"});
		const booltm89c2 = await TPAZsCoseA.increaseAllowance.call(addressdd7Bgrv, uintgnPw49, {from: accounts[3]});
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintMPJwAO9 = BigInt("253")
		const uintzUTqG8 = BigInt("11")
		const addressbceNbfv = "0x0000000000000000000000000000000000000001"
		const addressmGLFVJZ = accounts[3]
//		const uint256PZplxlG = await TPAIb84Goj.burn.call(uintMPJwAO9, {from: accounts[3]});
//		const boolFZqfzAy = await TPAIb84Goj.transfer.call(addressbceNbfv, uintzUTqG8, {from: accounts[0]});
//		const boolmpHQM3a = await TPAIb84Goj.unfreezeAccount.call(addressmGLFVJZ, {from: accounts[3]});

		await expect(TPAIb84Goj.burn.call(uintMPJwAO9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const addressgNGkvyF = accounts[2]
		const uintbCEmmFK = BigInt("728")
		const addressHE7bfJq = accounts[6]
		const addressucoI7cH = accounts[5]
		const addressbNR3wP = "0x0000000000000000000000000000000000000001"
//		const boolWEnxajc = await TPAIb84Goj.unfreezeAccount.call(addressgNGkvyF, {from: accounts[4]});
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addressucoI7cH, addressHE7bfJq, uintbCEmmFK, {from: accounts[1]});
//		const uint256ICnLixH = await TPAIb84Goj.totalSupply.call({from: accounts[3]});
//		const uint256LaRZUjN = await TPAIb84Goj.balanceOf.call(addressbNR3wP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAIb84Goj.unfreezeAccount.call(addressgNGkvyF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintw0HdHtw = BigInt("1589")
		const addressW4GLqi0 = accounts[3]
		const uintYCUNrhh = BigInt("306")
		const addresssUw4P4w = accounts[6]
		const addressFdMQuv = accounts[5]
//		const addressxUUzadN = await TPAIb84Goj.burnFrom.call(addressW4GLqi0, uintw0HdHtw, {from: "0x0000000000000000000000000000000000000001"});
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addressFdMQuv, addresssUw4P4w, uintYCUNrhh, {from: accounts[1]});

		await expect(TPAIb84Goj.burnFrom.call(addressW4GLqi0, uintw0HdHtw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const addressIoMJOr = accounts[1]
		const uintV25QM3F = BigInt("1457")
		const address8cI4aA = accounts[4]
		const uinteHI0PCj = BigInt("284")
		const addressSFFHjRr = accounts[6]
		const addresszbOTfjR = accounts[5]
		const uint256yJoH97e = await TPAIb84Goj.balanceOf.call(addressIoMJOr, {from: accounts[1]});
		const boolsBB5bJR = await TPAIb84Goj.increaseAllowance.call(address8cI4aA, uintV25QM3F, {from: accounts[0]});
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addresszbOTfjR, addressSFFHjRr, uinteHI0PCj, {from: accounts[1]});
//		const uint256wsOLrYj = await TPAIb84Goj.totalSupply.call({from: accounts[4]});

		assert.equal(boolsBB5bJR, true)
		assert.equal(uint256yJoH97e, BigInt("0"))
		await expect(TPAIb84Goj.transferFrom.call(addresszbOTfjR, addressSFFHjRr, uinteHI0PCj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintbJIP1wA = BigInt("302")
		const addresswcKj8Ju = accounts[6]
		const addressRIr2rGM = accounts[5]
		const uint48myWy = BigInt("513")
		const addressU8XXSh1 = accounts[0]
//		await TPAIb84Goj.pause.call({from: accounts[4]});
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addressRIr2rGM, addresswcKj8Ju, uintbJIP1wA, {from: accounts[1]});
//		const boolEFXuGRy = await TPAIb84Goj.unlock.call(addressU8XXSh1, uint48myWy, {from: accounts[2]});

		await expect(TPAIb84Goj.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const addressqdoZkJE = accounts[1]
		const uintq8COHgb = BigInt("306")
		const addressF4h8xgq = accounts[6]
		const addresszfAG3ne = accounts[6]
//		const addressce9ASnM = await TPAIb84Goj.removeAdmin.call(addressqdoZkJE, {from: accounts[4]});
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addresszfAG3ne, addressF4h8xgq, uintq8COHgb, {from: accounts[1]});

		await expect(TPAIb84Goj.removeAdmin.call(addressqdoZkJE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintgU7dfps = BigInt("1424")
		const addressaG5CTXL = "0x0000000000000000000000000000000000000001"
		const uintFlr7BUf = BigInt("306")
		const addressziSwFj = accounts[6]
		const addressANucIC5 = accounts[6]
//		const boolHshJh7p = await TPAIb84Goj.unlock.call(addressaG5CTXL, uintgU7dfps, {from: accounts[4]});
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addressANucIC5, addressziSwFj, uintFlr7BUf, {from: accounts[1]});

		await expect(TPAIb84Goj.unlock.call(addressaG5CTXL, uintgU7dfps, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const addressn3EJIr = accounts[4]
		const uintwot4WLk = BigInt("306")
		const address2NsBXp = accounts[7]
		const addresst5pL5jh = accounts[5]
		const boolmAKDzY = await TPAIb84Goj.isOwner.call(addressn3EJIr, {from: accounts[1]});
		const stringFZdBmIR = await TPAIb84Goj.name.call({from: accounts[0]});
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addresst5pL5jh, address2NsBXp, uintwot4WLk, {from: accounts[1]});

		assert.equal(boolmAKDzY, true)
		assert.equal(stringFZdBmIR, "TPA")
		await expect(TPAIb84Goj.transferFrom.call(addresst5pL5jh, address2NsBXp, uintwot4WLk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const addressQEGA87V = accounts[3]
		const uintE0flaCH = BigInt("306")
		const addressCXbs7k3 = accounts[5]
		const addressqjsLOiM = accounts[5]
		const addressqZp1TQz = await TPAIb84Goj.addAdmin.call(addressQEGA87V, {from: accounts[4]});
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addressqjsLOiM, addressCXbs7k3, uintE0flaCH, {from: accounts[1]});

		await expect(TPAIb84Goj.transferFrom.call(addressqjsLOiM, addressCXbs7k3, uintE0flaCH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const uintdqir58O = BigInt("306")
		const addressPmdyoAW = accounts[5]
		const addressIlEM2YD = accounts[5]
		const boolhN1bYrR = await TPAIb84Goj.paused.call({from: accounts[0]});
//		const bool9bnxLz = await TPAIb84Goj.transferFrom.call(addressIlEM2YD, addressPmdyoAW, uintdqir58O, {from: accounts[1]});

		assert.equal(boolhN1bYrR, false)
		await expect(TPAIb84Goj.transferFrom.call(addressIlEM2YD, addressPmdyoAW, uintdqir58O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAVoDeDur = await TPA.new({from: accounts[3]});
		const addressJarrHoj = accounts[4]
		const addressQfVUw5A = "0x0000000000000000000000000000000000000001"
		const addressI3hnDvJ = accounts[2]
		const booldTS9uwz = await TPAVoDeDur.freezeAccount.call(addressJarrHoj, {from: accounts[3]});
//		const addresst9kUDx9 = await TPAVoDeDur.notFrozen.call(addressQfVUw5A, {from: accounts[4]});
//		await TPAVoDeDur.pause.call({from: accounts[5]});
//		const uint256EA2v8F = await TPAVoDeDur.balanceOf.call(addressI3hnDvJ, {from: accounts[2]});

		assert.equal(booldTS9uwz, true)
		await expect(TPAVoDeDur.notFrozen.call(addressQfVUw5A, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAIb84Goj = await TPA.new({from: accounts[4]});
		const addressPAA0QKy = "0x0000000000000000000000000000000000000001"
		const uintLWgnid8 = BigInt("142")
		const addresseXdxje = accounts[5]
		const addressTBA7Sp2 = accounts[4]
		const addressacXcXS = await TPAIb84Goj.transferOwnership.call(addressPAA0QKy, {from: accounts[4]});
//		const boolEQOlnQ = await TPAIb84Goj.unlock.call(addresseXdxje, uintLWgnid8, {from: accounts[2]});
//		const uint256j6WSeoj = await TPAIb84Goj.balanceOf.call(addressTBA7Sp2, {from: accounts[3]});
//		const stringCWKtoBW = await TPAIb84Goj.name.call({from: accounts[0]});

		await expect(TPAIb84Goj.unlock.call(addresseXdxje, uintLWgnid8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})