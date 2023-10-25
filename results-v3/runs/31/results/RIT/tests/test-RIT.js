const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RIThS3174p = await RIT.new({from: accounts[5]});
		const addressMBpzLEF = accounts[1]
		const uint256rJ9SYxQ = await RIThS3174p.balanceOf.call(addressMBpzLEF, {from: accounts[5]});
		const stringR5AzQKP = await RIThS3174p.symbol.call({from: accounts[1]});
		const uint256IJjSl1l = await RIThS3174p.totalSupply.call({from: accounts[1]});

		assert.equal(stringR5AzQKP, "RIT 2.0")
		assert.equal(uint256IJjSl1l, BigInt("500000000000000000000000000"))
		assert.equal(uint256rJ9SYxQ, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITAP3RDXV = await RIT.new({from: accounts[1]});
		const uintT3UTGRE = BigInt("1266")
		const addresss1PCAur = accounts[2]
		const uintzrr8gN = BigInt("1925")
		const addresslYFEbZD = accounts[0]
		const uintuT1oUG = BigInt("816")
		const addressY9lMm7V = accounts[1]
		const uintm7AivKs = BigInt("743")
		const addressh9FamgH = accounts[0]
		const uintSsQYwwa = BigInt("575")
		const addressqoojlD = accounts[2]
		const boolDazFm6z = await RITAP3RDXV.transfer.call(addresss1PCAur, uintT3UTGRE, {from: accounts[1]});
		const boolWfK1bRu = await RITAP3RDXV.approve.call(addresslYFEbZD, uintzrr8gN, {from: accounts[4]});
		const boolEdAW3Bs = await RITAP3RDXV.approve.call(addressY9lMm7V, uintuT1oUG, {from: accounts[0]});
		const boolvGZGp3E = await RITAP3RDXV.approve.call(addressh9FamgH, uintm7AivKs, {from: accounts[3]});
		const boolw70JOVX = await RITAP3RDXV.decreaseAllowance.call(addressqoojlD, uintSsQYwwa, {from: accounts[2]});

		await expect(RITAP3RDXV.transfer.call(addresss1PCAur, uintT3UTGRE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITrV53gMV = await RIT.new({from: accounts[3]});
		const addresswsQbsIW = accounts[4]
		const addressXR9zhzG = accounts[4]
		const uintVJZedns = BigInt("1912")
		const addresskTiJRFN = "0x0000000000000000000000000000000000000001"
		const addressLvr6tBO = accounts[1]
		const addresslfX9YOD = accounts[1]
		const uintrrQuViC = BigInt("1966")
		const addressgKv2mMI = accounts[5]
		const addressCaSbMIN = accounts[2]
		const stringdRcobCK = await RITrV53gMV.name.call({from: accounts[2]});
		const uint256xkLFzNK = await RITrV53gMV.allowance.call(addressXR9zhzG, addresswsQbsIW, {from: accounts[4]});
		const boolMwfSq7E = await RITrV53gMV.increaseAllowance.call(addresskTiJRFN, uintVJZedns, {from: accounts[1]});
		const uint256M0zOTLm = await RITrV53gMV.allowance.call(addresslfX9YOD, addressLvr6tBO, {from: accounts[3]});
		const uint256PwOGwYv = await RITrV53gMV.totalSupply.call({from: accounts[3]});
		const boolfZ8hzSF = await RITrV53gMV.transferFrom.call(addressCaSbMIN, addressgKv2mMI, uintrrQuViC, {from: accounts[0]});

		assert.equal(boolMwfSq7E, true)
		assert.equal(stringdRcobCK, "Real Estate Investment Token")
		assert.equal(uint256M0zOTLm, BigInt("0"))
		assert.equal(uint256PwOGwYv, BigInt("500000000000000000000000000"))
		assert.equal(uint256xkLFzNK, BigInt("0"))
		await expect(RITrV53gMV.transferFrom.call(addressCaSbMIN, addressgKv2mMI, uintrrQuViC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITjB4I6EU = await RIT.new({from: accounts[0]});
		const addressn243osN = accounts[3]
		const uintASfjulQ = BigInt("1648")
		const addressysbtdJ = accounts[2]
		const uintCJBvXWI = BigInt("620")
		const addressqHis6Ls = accounts[4]
		const uint8WvWMKbz = await RITjB4I6EU.decimals.call({from: accounts[2]});
		const uint256vk9xunC = await RITjB4I6EU.balanceOf.call(addressn243osN, {from: accounts[1]});
		const bool67SENd = await RITjB4I6EU.transfer.call(addressysbtdJ, uintASfjulQ, {from: accounts[3]});
		const boolmOeN1Z = await RITjB4I6EU.approve.call(addressqHis6Ls, uintCJBvXWI, {from: accounts[0]});

		assert.equal(uint256vk9xunC, BigInt("0"))
		assert.equal(uint8WvWMKbz, BigInt("18"))
		await expect(RITjB4I6EU.transfer.call(addressysbtdJ, uintASfjulQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITqbRK7yk = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMk3JnKu = accounts[0]
		const addressTKZ4C5l = accounts[3]
		const uintkDTJM6 = BigInt("1643")
		const addresslstQ5PX = accounts[3]
		const uint256mw802Hb = await RITqbRK7yk.allowance.call(addressTKZ4C5l, addressMk3JnKu, {from: accounts[0]});
		const boolxQM81dv = await RITqbRK7yk.decreaseAllowance.call(addresslstQ5PX, uintkDTJM6, {from: accounts[4]});
		const uint256kt1Hcky = await RITqbRK7yk.totalSupply.call({from: accounts[0]});
	});

	it('test for RIT', async () => {
		const RIThS3174p = await RIT.new({from: accounts[5]});
		const addressmVW4Afm = accounts[1]
		const uintfZM2Zc = BigInt("1984")
		const uint256rJ9SYxQ = await RIThS3174p.balanceOf.call(addressmVW4Afm, {from: accounts[5]});
		const uint256nekqtRu = await RIThS3174p._burn.call(uintfZM2Zc, {from: accounts[3]});
		const stringR5AzQKP = await RIThS3174p.symbol.call({from: accounts[1]});
		const uint256IJjSl1l = await RIThS3174p.totalSupply.call({from: accounts[1]});

		assert.equal(uint256rJ9SYxQ, BigInt("0"))
		await expect(RIThS3174p._burn.call(uintfZM2Zc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITGz6DlTZ = await RIT.new({from: accounts[4]});
		const uintkdMBWj8 = BigInt("1298")
		const addressRekhEQ = accounts[4]
		const addressIgmtQ82 = accounts[3]
		const uintKVKFPfM = BigInt("1556")
		const addresswYRmFcc = accounts[5]
		const boolnsBOEtO = await RITGz6DlTZ.increaseAllowance.call(addressRekhEQ, uintkdMBWj8, {from: accounts[0]});
		const uint256cYcMkVp = await RITGz6DlTZ.balanceOf.call(addressIgmtQ82, {from: accounts[0]});
		const boolAcv1nBl = await RITGz6DlTZ.decreaseAllowance.call(addresswYRmFcc, uintKVKFPfM, {from: accounts[1]});

		assert.equal(boolnsBOEtO, true)
		assert.equal(uint256cYcMkVp, BigInt("0"))
		await expect(RITGz6DlTZ.decreaseAllowance.call(addresswYRmFcc, uintKVKFPfM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITm54QS1E = await RIT.new({from: accounts[3]});
		const uintfHGfoUE = BigInt("998")
		const addressyIfXUqD = accounts[3]
		const uintEa4o0C = BigInt("1536")
		const addressH1iDt1 = accounts[3]
		const boolXm0oPqI = await RITm54QS1E.approve.call(addressyIfXUqD, uintfHGfoUE, {from: accounts[2]});
		const stringTcDDuqo = await RITm54QS1E.name.call({from: accounts[2]});
		const boolWYtDVV8 = await RITm54QS1E.increaseAllowance.call(addressH1iDt1, uintEa4o0C, {from: accounts[0]});

		assert.equal(boolWYtDVV8, true)
		assert.equal(boolXm0oPqI, true)
		assert.equal(stringTcDDuqo, "Real Estate Investment Token")
	});

	it('test for RIT', async () => {
		const RITrV53gMV = await RIT.new({from: accounts[3]});
		const addressQKMAtzq = accounts[4]
		const addressv1hAAff = accounts[4]
		const uintUjQU8lP = BigInt("1912")
		const addressH0iLdla = "0x0000000000000000000000000000000000000000"
		const addresshM1MSzx = accounts[1]
		const addressmzbEEM5 = accounts[1]
		const uintnlBjBCO = BigInt("1508")
		const addressi67GKr = accounts[0]
		const uintLWCXvtw = BigInt("1825")
		const addressSxfufPC = accounts[3]
		const uintJwSNFz = BigInt("1966")
		const addressYlq8szv = accounts[5]
		const addressfkdQIKl = accounts[2]
		const stringdRcobCK = await RITrV53gMV.name.call({from: accounts[2]});
		const uint256xkLFzNK = await RITrV53gMV.allowance.call(addressv1hAAff, addressQKMAtzq, {from: accounts[4]});
		const boolMwfSq7E = await RITrV53gMV.increaseAllowance.call(addressH0iLdla, uintUjQU8lP, {from: accounts[1]});
		const uint256M0zOTLm = await RITrV53gMV.allowance.call(addressmzbEEM5, addresshM1MSzx, {from: accounts[3]});
		const booli2yjH4 = await RITrV53gMV.increaseAllowance.call(addressi67GKr, uintnlBjBCO, {from: accounts[2]});
		const uint256PwOGwYv = await RITrV53gMV.totalSupply.call({from: accounts[3]});
		const boolkMZf3gu = await RITrV53gMV.decreaseAllowance.call(addressSxfufPC, uintLWCXvtw, {from: accounts[1]});
		const boolfZ8hzSF = await RITrV53gMV.transferFrom.call(addressfkdQIKl, addressYlq8szv, uintJwSNFz, {from: accounts[0]});

		assert.equal(stringdRcobCK, "Real Estate Investment Token")
		assert.equal(uint256xkLFzNK, BigInt("0"))
		await expect(RITrV53gMV.increaseAllowance.call(addressH0iLdla, uintUjQU8lP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})