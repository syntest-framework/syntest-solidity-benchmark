const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOp3izMK = await FrogDAO.new({from: accounts[1]});
		const uintzqbuGOY = BigInt("573")
		const uintryB1baD = BigInt("722")
		const address3sgsCn = "0x0000000000000000000000000000000000000001"
		const addressH7VEcsG = accounts[4]
		const addressKcSofL = accounts[2]
		const uintyJxCDzE = await FrogDAOp3izMK.totalSupply.call({from: accounts[3]});
		const uintgvLOIO = await FrogDAOp3izMK.safeDiv.call(uintryB1baD, uintzqbuGOY, {from: accounts[5]});
		const uintt5iglw4 = await FrogDAOp3izMK.allowance.call(addressH7VEcsG, address3sgsCn, {from: accounts[0]});
		const uintHmXHpaN = await FrogDAOp3izMK.balanceOf.call(addressKcSofL, {from: accounts[0]});

		assert.equal(uintHmXHpaN, BigInt("0"))
		assert.equal(uintgvLOIO, BigInt("1"))
		assert.equal(uintt5iglw4, BigInt("0"))
		assert.equal(uintyJxCDzE, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOdIuCTOc = await FrogDAO.new({from: accounts[3]});
		const uintGUwm1GX = BigInt("1584")
		const addressxBsjjv = accounts[3]
		const addressbMQ8H3K = accounts[4]
		const uintGYF9TNv = BigInt("242")
		const uintjaO3FdF = BigInt("1497")
		const uintVxjzurC = BigInt("1368")
		const addressKoytoCF = accounts[3]
		const boolCdfz4CD = await FrogDAOdIuCTOc.transferFrom.call(addressbMQ8H3K, addressxBsjjv, uintGUwm1GX, {from: accounts[0]});
		const uintNZwFqB8 = await FrogDAOdIuCTOc.safeSub.call(uintjaO3FdF, uintGYF9TNv, {from: accounts[1]});
		const boolPrRDUM = await FrogDAOdIuCTOc.transfer.call(addressKoytoCF, uintVxjzurC, {from: accounts[2]});

		await expect(FrogDAOdIuCTOc.transferFrom.call(addressbMQ8H3K, addressxBsjjv, uintGUwm1GX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOogTy1V = await FrogDAO.new({from: accounts[3]});
		const uintb5YArmi = BigInt("1340")
		const addressc7cm6UL = accounts[3]
		const uintL60lrQ = BigInt("1530")
		const uintvI3ACYH = BigInt("1759")
		const addresso72K2Jc = accounts[1]
		const addressibh14aF = accounts[1]
		const uintkjVojq4 = BigInt("177")
		const uintvc9wBKb = BigInt("1754")
		const uintREUpQeP = await FrogDAOogTy1V.totalSupply.call({from: accounts[0]});
		const boole3j9yLj = await FrogDAOogTy1V.approve.call(addressc7cm6UL, uintb5YArmi, {from: accounts[2]});
		const uintTiM1RMP = await FrogDAOogTy1V.safeDiv.call(uintvI3ACYH, uintL60lrQ, {from: accounts[3]});
		const uintDk4b3xh = await FrogDAOogTy1V.allowance.call(addressibh14aF, addresso72K2Jc, {from: accounts[0]});
		const uintGyvArXZ = await FrogDAOogTy1V.safeDiv.call(uintvc9wBKb, uintkjVojq4, {from: accounts[4]});

		assert.equal(boole3j9yLj, true)
		assert.equal(uintDk4b3xh, BigInt("0"))
		assert.equal(uintGyvArXZ, BigInt("9"))
		assert.equal(uintREUpQeP, BigInt("1000000000000000000000000"))
		assert.equal(uintTiM1RMP, BigInt("1"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOlfghLHB = await FrogDAO.new({from: accounts[2]});
		const uintRGlDWx4 = BigInt("1148")
		const uintHSI7IUe = BigInt("2002")
		const uintYL5tMi9 = BigInt("1098")
		const addressv4sPCeN = accounts[3]
		const uintE8KiiR1 = BigInt("771")
		const uint5xOb6R = BigInt("66")
		const addressxMiXxVq = accounts[1]
		const uintk6WHfHS = await FrogDAOlfghLHB.safeDiv.call(uintHSI7IUe, uintRGlDWx4, {from: accounts[0]});
		const boolRAGC8Sq = await FrogDAOlfghLHB.transfer.call(addressv4sPCeN, uintYL5tMi9, {from: accounts[0]});
		const uintlf1N2QM = await FrogDAOlfghLHB.safeAdd.call(uint5xOb6R, uintE8KiiR1, {from: accounts[4]});
		const uintoRgJQLB = await FrogDAOlfghLHB.balanceOf.call(addressxMiXxVq, {from: accounts[4]});
		const uintX88bWw5 = await FrogDAOlfghLHB.totalSupply.call({from: accounts[1]});

		assert.equal(uintk6WHfHS, BigInt("1"))
		await expect(FrogDAOlfghLHB.transfer.call(addressv4sPCeN, uintYL5tMi9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOoInKR4z = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintRo7thCK = BigInt("1618")
		const uintEW44vGZ = BigInt("2002")
		const uintm3glVHI = BigInt("1568")
		const uintdFWewj8 = BigInt("1068")
		const uintrT0g9AM = BigInt("1981")
		const addressWobRTB0 = accounts[0]
		const addresscyZOYZd = accounts[3]
		const addressqfax3qK = accounts[3]
		const uintOGc3soy = await FrogDAOoInKR4z.safeDiv.call(uintEW44vGZ, uintRo7thCK, {from: accounts[2]});
		const uintB8FaSOF = await FrogDAOoInKR4z.safeMul.call(uintdFWewj8, uintm3glVHI, {from: accounts[1]});
		const boolfT5ml4P = await FrogDAOoInKR4z.transfer.call(addressWobRTB0, uintrT0g9AM, {from: "0x0000000000000000000000000000000000000001"});
		const uintgda3bs1 = await FrogDAOoInKR4z.balanceOf.call(addresscyZOYZd, {from: accounts[4]});
		const uintVX8IjtE = await FrogDAOoInKR4z.balanceOf.call(addressqfax3qK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOqVywR1c = await FrogDAO.new({from: accounts[2]});
		const addressEtytfKu = accounts[0]
		const uintlchrCCo = BigInt("1424")
		const addressv6phSq9 = accounts[3]
		const uintNv756A5 = BigInt("417")
		const uinteNwjpyl = BigInt("1427")
		const uintdMsMz4l = BigInt("262")
		const addressxc6EvK4 = "0x0000000000000000000000000000000000000001"
		const uintpDhtT4 = BigInt("634")
		const uintgtYcfob = BigInt("1209")
		const uintoJdteVJ = await FrogDAOqVywR1c.balanceOf.call(addressEtytfKu, {from: accounts[0]});
		const boolpeNBR5o = await FrogDAOqVywR1c.approve.call(addressv6phSq9, uintlchrCCo, {from: accounts[3]});
		const uintRKLI6Ox = await FrogDAOqVywR1c.safeMul.call(uinteNwjpyl, uintNv756A5, {from: accounts[0]});
		const boolG5i3S5O = await FrogDAOqVywR1c.transfer.call(addressxc6EvK4, uintdMsMz4l, {from: accounts[2]});
		const uintZ8m4NXg = await FrogDAOqVywR1c.safeDiv.call(uintgtYcfob, uintpDhtT4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolG5i3S5O, true)
		assert.equal(boolpeNBR5o, true)
		assert.equal(uintRKLI6Ox, BigInt("595059"))
		assert.equal(uintZ8m4NXg, BigInt("1"))
		assert.equal(uintoJdteVJ, BigInt("0"))
	});
})