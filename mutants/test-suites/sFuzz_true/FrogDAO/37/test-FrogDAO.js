const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOAyJOmpx = await FrogDAO.new({from: accounts[0]});
		const uintoF1FIYS = BigInt("842")
		const addressbyLRztb = accounts[5]
		const uintBZB8AjB = BigInt("96")
		const addressEDqWZ1 = accounts[1]
		const addressvb8qpX1 = accounts[4]
		const addressJpfrHSY = accounts[1]
//		const boolnDlOIO = await FrogDAOAyJOmpx.transfer.call(addressbyLRztb, uintoF1FIYS, {from: accounts[5]});
//		const boolwmpOOhv = await FrogDAOAyJOmpx.transferFrom.call(addressvb8qpX1, addressEDqWZ1, uintBZB8AjB, {from: accounts[4]});
//		const uintVRyVpPW = await FrogDAOAyJOmpx.totalSupply.call({from: accounts[0]});
//		const uintqxSLWl6 = await FrogDAOAyJOmpx.totalSupply.call({from: accounts[0]});
//		const uintV0iJZJz = await FrogDAOAyJOmpx.balanceOf.call(addressJpfrHSY, {from: accounts[0]});

		await expect(FrogDAOAyJOmpx.transfer.call(addressbyLRztb, uintoF1FIYS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOOodqVZZ = await FrogDAO.new({from: accounts[3]});
		const addresszvBLj1S = accounts[1]
		const addressCIvLaZI = accounts[5]
		const uintijJqn38 = BigInt("1000")
		const uintqYPlX0 = BigInt("2013")
		const uintaF1sK3F = BigInt("1096")
		const addresszyvdUE2 = accounts[0]
		const uintQVInPen = BigInt("16")
		const uintFoKuBg3 = BigInt("207")
		const uintgPGfi1q = await FrogDAOOodqVZZ.allowance.call(addressCIvLaZI, addresszvBLj1S, {from: accounts[3]});
		const uintGkhHNiA = await FrogDAOOodqVZZ.safeAdd.call(uintqYPlX0, uintijJqn38, {from: accounts[4]});
		const boolJszDaC7 = await FrogDAOOodqVZZ.transfer.call(addresszyvdUE2, uintaF1sK3F, {from: accounts[3]});
		const uintETmE18U = await FrogDAOOodqVZZ.totalSupply.call({from: accounts[4]});
		const uintrGFNsv = await FrogDAOOodqVZZ.safeSub.call(uintFoKuBg3, uintQVInPen, {from: accounts[3]});

		assert.equal(boolJszDaC7, true)
		assert.equal(uintETmE18U, BigInt("1000000000000000000000000"))
		assert.equal(uintGkhHNiA, BigInt("3013"))
		assert.equal(uintgPGfi1q, BigInt("0"))
		assert.equal(uintrGFNsv, BigInt("191"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOmsnMLKS = await FrogDAO.new({from: accounts[1]});
		const uintPvAMvsB = BigInt("1063")
		const uintm9Hszds = BigInt("1454")
		const uintHRiAzwJ = BigInt("1694")
		const addressQiv1JKB = accounts[2]
		const uintn8ujzil = BigInt("2003")
		const uintVzqK85V = BigInt("108")
		const uintx4NvbBj = await FrogDAOmsnMLKS.safeAdd.call(uintm9Hszds, uintPvAMvsB, {from: "0x0000000000000000000000000000000000000001"});
		const uintR7fyFqA = await FrogDAOmsnMLKS.totalSupply.call({from: accounts[3]});
		const boolLJxK0u = await FrogDAOmsnMLKS.approve.call(addressQiv1JKB, uintHRiAzwJ, {from: accounts[2]});
		const uintAIzUs2d = await FrogDAOmsnMLKS.totalSupply.call({from: accounts[5]});
		const uintQc2buo = await FrogDAOmsnMLKS.totalSupply.call({from: accounts[2]});
		const uintrmuOehc = await FrogDAOmsnMLKS.safeMul.call(uintVzqK85V, uintn8ujzil, {from: accounts[2]});

		assert.equal(boolLJxK0u, true)
		assert.equal(uintAIzUs2d, BigInt("1000000000000000000000000"))
		assert.equal(uintQc2buo, BigInt("1000000000000000000000000"))
		assert.equal(uintR7fyFqA, BigInt("1000000000000000000000000"))
		assert.equal(uintrmuOehc, BigInt("216324"))
		assert.equal(uintx4NvbBj, BigInt("2517"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOeUjMclY = await FrogDAO.new({from: accounts[1]});
		const addresst3uFDFY = accounts[1]
		const uintHrQTpq = BigInt("1466")
		const uintvhjE9U = BigInt("532")
		const uintiAUq3w = BigInt("1141")
		const uintmyTZPXt = BigInt("716")
		const uinthauXwHl = await FrogDAOeUjMclY.balanceOf.call(addresst3uFDFY, {from: accounts[4]});
		const uinttGlyO9O = await FrogDAOeUjMclY.safeMul.call(uintvhjE9U, uintHrQTpq, {from: accounts[2]});
		const uintXyfMNsI = await FrogDAOeUjMclY.safeAdd.call(uintmyTZPXt, uintiAUq3w, {from: accounts[0]});
		const uintCetzSN = await FrogDAOeUjMclY.totalSupply.call({from: accounts[1]});

		assert.equal(uintCetzSN, BigInt("1000000000000000000000000"))
		assert.equal(uintXyfMNsI, BigInt("1857"))
		assert.equal(uinthauXwHl, BigInt("1000000000000000000000000"))
		assert.equal(uinttGlyO9O, BigInt("779912"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOUI7t3tK = await FrogDAO.new({from: accounts[4]});
		const uintQA8Nkb6 = BigInt("28")
		const uintw1xy6qX = BigInt("1335")
		const uintkCEyr9r = BigInt("1859")
		const addressSTSf95y = accounts[4]
		const addressS2uMD1U = accounts[4]
		const uintJFKJqwi = BigInt("1304")
		const uintfJQ7hQY = BigInt("1480")
		const uintu5djl7n = BigInt("835")
		const addressmICi6Of = accounts[3]
		const uintHdLD6CY = BigInt("305")
		const addressaew7s0n = accounts[4]
		const uintLbesIsY = BigInt("1813")
		const uintjxOhVf = BigInt("952")
		const uintZdIVniP = await FrogDAOUI7t3tK.safeSub.call(uintw1xy6qX, uintQA8Nkb6, {from: "0x0000000000000000000000000000000000000001"});
//		const boolew3PwYQ = await FrogDAOUI7t3tK.transferFrom.call(addressS2uMD1U, addressSTSf95y, uintkCEyr9r, {from: accounts[0]});
//		const uintCotaCVj = await FrogDAOUI7t3tK.safeSub.call(uintfJQ7hQY, uintJFKJqwi, {from: accounts[1]});
//		const boole2cyfah = await FrogDAOUI7t3tK.approve.call(addressmICi6Of, uintu5djl7n, {from: accounts[4]});
//		const boolYVNdHwF = await FrogDAOUI7t3tK.approve.call(addressaew7s0n, uintHdLD6CY, {from: accounts[3]});
//		const uintMvYdvGa = await FrogDAOUI7t3tK.safeMul.call(uintjxOhVf, uintLbesIsY, {from: accounts[1]});

		assert.equal(uintZdIVniP, BigInt("1307"))
		await expect(FrogDAOUI7t3tK.transferFrom.call(addressS2uMD1U, addressSTSf95y, uintkCEyr9r, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOsyCuD9 = await FrogDAO.new({from: accounts[2]});
		const uintogmv9fm = BigInt("966")
		const uintkOXkHGw = BigInt("296")
		const uintZVLzCbD = BigInt("1142")
		const addressJCvg52E = accounts[4]
		const addressx17BbA = accounts[0]
		const addressg6GoHci = accounts[1]
		const uintjiSE4mz = await FrogDAOsyCuD9.safeDiv.call(uintkOXkHGw, uintogmv9fm, {from: accounts[1]});
//		const boolxL7x8Pg = await FrogDAOsyCuD9.transfer.call(addressJCvg52E, uintZVLzCbD, {from: accounts[0]});
//		const uintnz0O3vk = await FrogDAOsyCuD9.allowance.call(addressg6GoHci, addressx17BbA, {from: accounts[2]});

		assert.equal(uintjiSE4mz, BigInt("0"))
		await expect(FrogDAOsyCuD9.transfer.call(addressJCvg52E, uintZVLzCbD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOEvJW0ft = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyX79gJ1 = BigInt("855")
		const uinteJkD429 = BigInt("568")
		const uintyyGoRp1 = BigInt("627")
		const addressYRaxxvK = accounts[2]
		const address2rfAwf = accounts[1]
		const addressoFoz7ay = accounts[3]
		const uintfSR4RHj = BigInt("1800")
		const uintdHZCVMZ = BigInt("602")
		const uintZK8Uer = await FrogDAOEvJW0ft.safeDiv.call(uinteJkD429, uintyX79gJ1, {from: accounts[3]});
		const boolim3HudS = await FrogDAOEvJW0ft.transfer.call(addressYRaxxvK, uintyyGoRp1, {from: accounts[2]});
		const uintokq7Yq0 = await FrogDAOEvJW0ft.allowance.call(addressoFoz7ay, address2rfAwf, {from: accounts[2]});
		const uintOKecFoR = await FrogDAOEvJW0ft.safeSub.call(uintdHZCVMZ, uintfSR4RHj, {from: accounts[4]});
	});
})