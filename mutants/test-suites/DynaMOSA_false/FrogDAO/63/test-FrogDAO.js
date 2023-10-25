const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOLNay0G = await FrogDAO.new({from: accounts[5]});
		const uintXrruB4 = BigInt("1510")
		const addressAT0TqoW = accounts[2]
		const uintyouweGG = BigInt("868")
		const uintCaXF7G = BigInt("114")
		const addressBJxb7lo = accounts[2]
		const addressVKWoF4r = "0x0000000000000000000000000000000000000001"
		const boolsRvLS0i = await FrogDAOLNay0G.approve.call(addressAT0TqoW, uintXrruB4, {from: accounts[3]});
//		const uintBBSZsPO = await FrogDAOLNay0G.safeSub.call(uintCaXF7G, uintyouweGG, {from: accounts[3]});
//		const uintGATVLx9 = await FrogDAOLNay0G.allowance.call(addressVKWoF4r, addressBJxb7lo, {from: accounts[4]});
//		const uintsGzQoY = await FrogDAOLNay0G.totalSupply.call({from: accounts[0]});

		assert.equal(boolsRvLS0i, true)
		await expect(FrogDAOLNay0G.safeSub.call(uintCaXF7G, uintyouweGG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOvgx2jb = await FrogDAO.new({from: accounts[4]});
		const addressXvTpcxo = accounts[4]
		const addressA4fLmXE = "0x0000000000000000000000000000000000000001"
		const uintJ1wUZCB = BigInt("937")
		const addressGTefAk1 = accounts[2]
		const addressRCN0twD = accounts[2]
		const addressFpyeNZY = accounts[2]
		const uintUmEMlCf = BigInt("1664")
		const uintx2vA0VA = BigInt("723")
		const uintdasi18r = await FrogDAOvgx2jb.allowance.call(addressA4fLmXE, addressXvTpcxo, {from: accounts[4]});
		const boolaDY11w8 = await FrogDAOvgx2jb.approve.call(addressGTefAk1, uintJ1wUZCB, {from: accounts[2]});
		const uinta1DrXzO = await FrogDAOvgx2jb.allowance.call(addressFpyeNZY, addressRCN0twD, {from: accounts[2]});
		const uintu8nfDhv = await FrogDAOvgx2jb.safeMul.call(uintx2vA0VA, uintUmEMlCf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaDY11w8, true)
		assert.equal(uinta1DrXzO, BigInt("0"))
		assert.equal(uintdasi18r, BigInt("0"))
		assert.equal(uintu8nfDhv, BigInt("1203072"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOIR7MYlR = await FrogDAO.new({from: accounts[3]});
		const addresspus483b = accounts[2]
		const addressX5SGZSl = accounts[5]
		const addressn8yaaB = accounts[3]
		const uintd6ZbwWM = BigInt("1941")
		const uintk72n9ub = BigInt("1168")
		const uintE2itq6z = await FrogDAOIR7MYlR.allowance.call(addressX5SGZSl, addresspus483b, {from: accounts[1]});
		const uintbJQeaEU = await FrogDAOIR7MYlR.balanceOf.call(addressn8yaaB, {from: accounts[4]});
		const uinttw82IJ = await FrogDAOIR7MYlR.safeAdd.call(uintk72n9ub, uintd6ZbwWM, {from: accounts[5]});

		assert.equal(uintE2itq6z, BigInt("0"))
		assert.equal(uintbJQeaEU, BigInt("1000000000000000000000000"))
		assert.equal(uinttw82IJ, BigInt("3109"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAObVfHa7z = await FrogDAO.new({from: accounts[2]});
		const uintz6Z5KVs = BigInt("913")
		const addressnASjWur = accounts[3]
		const uintAfuZgfb = BigInt("88")
		const uintwyfVv1q = BigInt("2023")
		const uintDmxyxoa = BigInt("1123")
		const addressqmO88bk = accounts[2]
		const boolgOFMtvu = await FrogDAObVfHa7z.approve.call(addressnASjWur, uintz6Z5KVs, {from: "0x0000000000000000000000000000000000000001"});
		const uintX4vt7nN = await FrogDAObVfHa7z.totalSupply.call({from: accounts[3]});
		const uintAVnJCP9 = await FrogDAObVfHa7z.safeMul.call(uintwyfVv1q, uintAfuZgfb, {from: accounts[0]});
//		const boolIDihPgH = await FrogDAObVfHa7z.transfer.call(addressqmO88bk, uintDmxyxoa, {from: accounts[4]});

		assert.equal(boolgOFMtvu, true)
		assert.equal(uintAVnJCP9, BigInt("178024"))
		assert.equal(uintX4vt7nN, BigInt("1000000000000000000000000"))
		await expect(FrogDAObVfHa7z.transfer.call(addressqmO88bk, uintDmxyxoa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAONVPcPGS = await FrogDAO.new({from: accounts[3]});
		const uintC0NAH6j = BigInt("1260")
		const addressXXf7pa5 = accounts[1]
		const addressrNc4XZk = accounts[0]
		const uintRU3HJf3 = BigInt("119")
		const uintnSKBjvs = BigInt("1354")
		const uintYFpVRZd = BigInt("85")
		const addresskPzCDXj = accounts[4]
		const addressALV24HW = accounts[3]
//		const boolw13F6v6 = await FrogDAONVPcPGS.transferFrom.call(addressrNc4XZk, addressXXf7pa5, uintC0NAH6j, {from: accounts[4]});
//		const uintGMwxKZN = await FrogDAONVPcPGS.safeDiv.call(uintnSKBjvs, uintRU3HJf3, {from: "0x0000000000000000000000000000000000000001"});
//		const uintyTDmikw = await FrogDAONVPcPGS.totalSupply.call({from: accounts[2]});
//		const booljbmYI9u = await FrogDAONVPcPGS.transferFrom.call(addressALV24HW, addresskPzCDXj, uintYFpVRZd, {from: accounts[4]});

		await expect(FrogDAONVPcPGS.transferFrom.call(addressrNc4XZk, addressXXf7pa5, uintC0NAH6j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOv5rev67 = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintziWTSOn = BigInt("15")
		const uintd5O6b9R = BigInt("695")
		const uintkaS3bZS = BigInt("115")
		const uintVgLADat = BigInt("826")
		const uintpHXAXQ = await FrogDAOv5rev67.safeSub.call(uintd5O6b9R, uintziWTSOn, {from: accounts[1]});
		const uintL9bR3S8 = await FrogDAOv5rev67.safeDiv.call(uintVgLADat, uintkaS3bZS, {from: "0x0000000000000000000000000000000000000001"});
	});
})