const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOUvoVjzA = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxxILtXL = BigInt("373")
		const addressDNYLBWu = accounts[2]
		const uintIVTqxp1 = BigInt("1841")
		const uintwQQvnY = BigInt("761")
		const uintdERHljs = BigInt("800")
		const addressa7wiZ9u = accounts[1]
		const addressNr2La1c = accounts[3]
		const uintUN2tBOg = BigInt("1719")
		const addresshHkfx1f = accounts[3]
		const uintD8osaUU = BigInt("1791")
		const addressa9P6Mq = accounts[0]
		const uintZYK8M6w = BigInt("913")
		const uintFZuZPt = BigInt("336")
		const boolonKb82S = await FrogDAOUvoVjzA.transfer.call(addressDNYLBWu, uintxxILtXL, {from: accounts[3]});
		const uintANtiqnj = await FrogDAOUvoVjzA.safeDiv.call(uintwQQvnY, uintIVTqxp1, {from: accounts[0]});
		const boolqpU2AXH = await FrogDAOUvoVjzA.transferFrom.call(addressNr2La1c, addressa7wiZ9u, uintdERHljs, {from: accounts[3]});
		const boole0pDWmm = await FrogDAOUvoVjzA.transfer.call(addresshHkfx1f, uintUN2tBOg, {from: accounts[1]});
		const boolMAG0Dwg = await FrogDAOUvoVjzA.transfer.call(addressa9P6Mq, uintD8osaUU, {from: accounts[3]});
		const uintySvTKvG = await FrogDAOUvoVjzA.safeMul.call(uintFZuZPt, uintZYK8M6w, {from: accounts[0]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOhdng71t = await FrogDAO.new({from: accounts[0]});
		const uintVYa0m8w = BigInt("80")
		const uinttlrs2ZI = BigInt("1461")
		const addressP5Ej4L = accounts[0]
		const uintG1eOwn1 = BigInt("1210")
		const uintNYUWG3J = BigInt("937")
		const addressWAyYHyl = accounts[1]
		const addressjrZ3h1 = accounts[4]
		const addressCr0eQwb = "0x0000000000000000000000000000000000000001"
		const uintigPEKst = await FrogDAOhdng71t.safeSub.call(uinttlrs2ZI, uintVYa0m8w, {from: accounts[2]});
		const uintEw9XOyd = await FrogDAOhdng71t.balanceOf.call(addressP5Ej4L, {from: accounts[1]});
		const uintpw0GDf = await FrogDAOhdng71t.safeDiv.call(uintNYUWG3J, uintG1eOwn1, {from: accounts[1]});
		const uintbNAO8rC = await FrogDAOhdng71t.balanceOf.call(addressWAyYHyl, {from: "0x0000000000000000000000000000000000000001"});
		const uintWOYgQk7 = await FrogDAOhdng71t.allowance.call(addressCr0eQwb, addressjrZ3h1, {from: accounts[0]});

		assert.equal(uintEw9XOyd, BigInt("1000000000000000000000000"))
		assert.equal(uintWOYgQk7, BigInt("0"))
		assert.equal(uintbNAO8rC, BigInt("0"))
		assert.equal(uintigPEKst, BigInt("1381"))
		assert.equal(uintpw0GDf, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAODQgaGD6 = await FrogDAO.new({from: accounts[4]});
		const uintrodwYQn = BigInt("231")
		const addressrCnX8Ts = accounts[4]
		const addressvv8Y1JQ = accounts[2]
		const uintBkjzTw0 = BigInt("1541")
		const addressiYAAD6c = accounts[0]
		const addresskKntbxg = accounts[0]
		const boolNxFwWbs = await FrogDAODQgaGD6.approve.call(addressrCnX8Ts, uintrodwYQn, {from: accounts[4]});
		const uintw3ud4oH = await FrogDAODQgaGD6.balanceOf.call(addressvv8Y1JQ, {from: "0x0000000000000000000000000000000000000001"});
		const booluougkjI = await FrogDAODQgaGD6.transferFrom.call(addresskKntbxg, addressiYAAD6c, uintBkjzTw0, {from: accounts[3]});
		const uintpP2aVSM = await FrogDAODQgaGD6.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNxFwWbs, true)
		assert.equal(uintw3ud4oH, BigInt("0"))
		await expect(FrogDAODQgaGD6.transferFrom.call(addresskKntbxg, addressiYAAD6c, uintBkjzTw0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOsGXVhQg = await FrogDAO.new({from: accounts[2]});
		const addresscU5U4Mz = accounts[4]
		const addressMaVPu5 = accounts[4]
		const addressaimY1q = accounts[0]
		const uintJwNpgCG = BigInt("871")
		const addressKNPGT4G = accounts[4]
		const uintUdxilik = BigInt("1965")
		const uintKkzjPn0 = BigInt("401")
		const uintnKjoSRg = await FrogDAOsGXVhQg.balanceOf.call(addresscU5U4Mz, {from: "0x0000000000000000000000000000000000000001"});
		const uintQgDOrY7 = await FrogDAOsGXVhQg.allowance.call(addressaimY1q, addressMaVPu5, {from: accounts[3]});
		const booll5eDx54 = await FrogDAOsGXVhQg.transfer.call(addressKNPGT4G, uintJwNpgCG, {from: accounts[5]});
		const uintNQXCyKs = await FrogDAOsGXVhQg.safeDiv.call(uintKkzjPn0, uintUdxilik, {from: accounts[4]});
		const uintHoCLSk = await FrogDAOsGXVhQg.totalSupply.call({from: accounts[4]});

		assert.equal(uintQgDOrY7, BigInt("0"))
		assert.equal(uintnKjoSRg, BigInt("0"))
		await expect(FrogDAOsGXVhQg.transfer.call(addressKNPGT4G, uintJwNpgCG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOFwMl0j4 = await FrogDAO.new({from: accounts[2]});
		const uintdHIGkz = BigInt("12")
		const addressxdhMmtd = accounts[2]
		const uintDUr1QL5 = BigInt("918")
		const addressQu9Z3dw = "0x0000000000000000000000000000000000000001"
		const addresswg7Wvx = accounts[0]
		const uintRzyc6lm = BigInt("533")
		const uintCkoDG0x = BigInt("1650")
		const uintNnmbCC7 = await FrogDAOFwMl0j4.totalSupply.call({from: accounts[4]});
		const boolKGfhGn6 = await FrogDAOFwMl0j4.approve.call(addressxdhMmtd, uintdHIGkz, {from: accounts[0]});
		const boolcjAsODx = await FrogDAOFwMl0j4.transferFrom.call(addresswg7Wvx, addressQu9Z3dw, uintDUr1QL5, {from: accounts[1]});
		const uintMby3XWC = await FrogDAOFwMl0j4.safeDiv.call(uintCkoDG0x, uintRzyc6lm, {from: accounts[4]});

		assert.equal(boolKGfhGn6, true)
		assert.equal(uintNnmbCC7, BigInt("1000000000000000000000000"))
		await expect(FrogDAOFwMl0j4.transferFrom.call(addresswg7Wvx, addressQu9Z3dw, uintDUr1QL5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOM8MsyXp = await FrogDAO.new({from: accounts[0]});
		const uintvbpfLPn = BigInt("1863")
		const uintvKn9vG0 = BigInt("1232")
		const uintqnBXJVf = BigInt("1765")
		const addresshcGmvTn = accounts[2]
		const addressDTXWJv = accounts[0]
		const uintKhu32mA = await FrogDAOM8MsyXp.safeAdd.call(uintvKn9vG0, uintvbpfLPn, {from: accounts[5]});
		const boolFu2nl1p = await FrogDAOM8MsyXp.transferFrom.call(addressDTXWJv, addresshcGmvTn, uintqnBXJVf, {from: accounts[0]});
		const uintcIufeFD = await FrogDAOM8MsyXp.totalSupply.call({from: accounts[2]});

		assert.equal(uintKhu32mA, BigInt("3095"))
		await expect(FrogDAOM8MsyXp.transferFrom.call(addressDTXWJv, addresshcGmvTn, uintqnBXJVf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})