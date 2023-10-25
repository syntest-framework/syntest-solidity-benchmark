const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOF9XMJds = await FrogDAO.new({from: accounts[4]});
		const uint41Aqoz = BigInt("713")
		const uintqs2sO3V = BigInt("399")
		const uintPlnNLnS = BigInt("1941")
		const addressEzagHzx = accounts[3]
		const uintc3cIho = BigInt("875")
		const uintR6i7yaj = BigInt("1614")
		const uintFKXcSuy = await FrogDAOF9XMJds.safeDiv.call(uintqs2sO3V, uint41Aqoz, {from: accounts[2]});
		const boolPO8SWN6 = await FrogDAOF9XMJds.transfer.call(addressEzagHzx, uintPlnNLnS, {from: accounts[1]});
		const uintem6sbva = await FrogDAOF9XMJds.safeDiv.call(uintR6i7yaj, uintc3cIho, {from: accounts[3]});

		assert.equal(uintFKXcSuy, BigInt("0"))
		await expect(FrogDAOF9XMJds.transfer.call(addressEzagHzx, uintPlnNLnS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOU5zxPK = await FrogDAO.new({from: accounts[3]});
		const uintCiuZS3I = BigInt("833")
		const uintfIEMwBz = BigInt("1484")
		const addressFoGi2RS = accounts[3]
		const addressO0WZRb7 = accounts[0]
		const uintDPtKfku = BigInt("1441")
		const uintyfCcDwi = BigInt("2033")
		const uintbGiWYQ8 = BigInt("877")
		const uintzSzHWw = BigInt("1345")
		const uinthaKf14B = BigInt("745")
		const addresst9fUTA = accounts[2]
		const uintPRdCsk0 = await FrogDAOU5zxPK.safeSub.call(uintfIEMwBz, uintCiuZS3I, {from: accounts[4]});
		const uintuETHjaK = await FrogDAOU5zxPK.allowance.call(addressO0WZRb7, addressFoGi2RS, {from: accounts[5]});
		const uintq1TTekH = await FrogDAOU5zxPK.safeMul.call(uintyfCcDwi, uintDPtKfku, {from: accounts[2]});
		const uintORr7AD = await FrogDAOU5zxPK.safeDiv.call(uintzSzHWw, uintbGiWYQ8, {from: accounts[4]});
		const boolYlyU18N = await FrogDAOU5zxPK.approve.call(addresst9fUTA, uinthaKf14B, {from: accounts[3]});
		const uintq8i0kNS = await FrogDAOU5zxPK.totalSupply.call({from: accounts[2]});

		assert.equal(boolYlyU18N, true)
		assert.equal(uintORr7AD, BigInt("1"))
		assert.equal(uintPRdCsk0, BigInt("651"))
		assert.equal(uintq1TTekH, BigInt("2929553"))
		assert.equal(uintq8i0kNS, BigInt("1000000000000000000000000"))
		assert.equal(uintuETHjaK, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOENddA8f = await FrogDAO.new({from: accounts[3]});
		const uintW3pJbHh = BigInt("1309")
		const uintRf1fGxg = BigInt("1387")
		const uintoYKYDH7 = BigInt("495")
		const uint8yVSin = BigInt("298")
		const uintmfHOiCS = BigInt("1192")
		const addresseapsCIH = accounts[5]
		const addressvsuW4S3 = accounts[1]
		const uintBPU0T5j = BigInt("1862")
		const addressfh11Yyc = accounts[3]
		const uintjGSkTPz = BigInt("1881")
		const addressBh2zUHs = accounts[3]
		const uint8asJEN = BigInt("528")
		const addressJ0kIuvi = accounts[0]
		const uintFL8IowK = await FrogDAOENddA8f.safeAdd.call(uintRf1fGxg, uintW3pJbHh, {from: accounts[2]});
		const uintCb4dBB = await FrogDAOENddA8f.safeMul.call(uint8yVSin, uintoYKYDH7, {from: accounts[1]});
		const boolLp9Etn3 = await FrogDAOENddA8f.transferFrom.call(addressvsuW4S3, addresseapsCIH, uintmfHOiCS, {from: accounts[4]});
		const boolWsVCz3R = await FrogDAOENddA8f.transfer.call(addressfh11Yyc, uintBPU0T5j, {from: accounts[4]});
		const boolHU8XHDI = await FrogDAOENddA8f.transfer.call(addressBh2zUHs, uintjGSkTPz, {from: accounts[3]});
		const boolK5jyAyJ = await FrogDAOENddA8f.approve.call(addressJ0kIuvi, uint8asJEN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintCb4dBB, BigInt("147510"))
		assert.equal(uintFL8IowK, BigInt("2696"))
		await expect(FrogDAOENddA8f.transferFrom.call(addressvsuW4S3, addresseapsCIH, uintmfHOiCS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOMcIIu2n = await FrogDAO.new({from: accounts[1]});
		const addressqBkKC0k = accounts[4]
		const uintJcPGJLW = BigInt("1502")
		const uintlJp3GSK = BigInt("1540")
		const uintP1Cr0bl = BigInt("1210")
		const uintCcTDGwg = BigInt("1887")
		const uintTeWs5n6 = BigInt("339")
		const uintWf4cYro = BigInt("263")
		const uintZN32aBE = await FrogDAOMcIIu2n.balanceOf.call(addressqBkKC0k, {from: accounts[4]});
		const uintWxnPQWq = await FrogDAOMcIIu2n.safeMul.call(uintlJp3GSK, uintJcPGJLW, {from: accounts[3]});
		const uintjktwEql = await FrogDAOMcIIu2n.safeSub.call(uintCcTDGwg, uintP1Cr0bl, {from: accounts[1]});
		const uintTV7w3Td = await FrogDAOMcIIu2n.safeSub.call(uintWf4cYro, uintTeWs5n6, {from: accounts[3]});

		assert.equal(uintWxnPQWq, BigInt("2313080"))
		assert.equal(uintZN32aBE, BigInt("0"))
		assert.equal(uintjktwEql, BigInt("677"))
		await expect(FrogDAOMcIIu2n.safeSub.call(uintWf4cYro, uintTeWs5n6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOz6myGX = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintF1VRctx = BigInt("692")
		const uintDa4d9s4 = BigInt("778")
		const uintMg84Q40 = BigInt("1125")
		const uintq64zfR = BigInt("868")
		const addressv9f7Ahg = accounts[2]
		const uintOzzRVSl = BigInt("1966")
		const addressNjbbcOe = accounts[5]
		const uintya8HOyA = BigInt("1336")
		const uintAB7vfuh = BigInt("310")
		const uintUGWySl5 = await FrogDAOz6myGX.safeDiv.call(uintDa4d9s4, uintF1VRctx, {from: accounts[2]});
		const uintoeIjR7 = await FrogDAOz6myGX.safeDiv.call(uintq64zfR, uintMg84Q40, {from: accounts[3]});
		const uintdDshgz = await FrogDAOz6myGX.balanceOf.call(addressv9f7Ahg, {from: accounts[1]});
		const boolfhiOG35 = await FrogDAOz6myGX.transfer.call(addressNjbbcOe, uintOzzRVSl, {from: accounts[1]});
		const uintBvSFn8O = await FrogDAOz6myGX.safeDiv.call(uintAB7vfuh, uintya8HOyA, {from: accounts[3]});
	});
})