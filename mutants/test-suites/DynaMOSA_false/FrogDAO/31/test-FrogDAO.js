const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOUuJktZu = await FrogDAO.new({from: accounts[2]});
		const uintg8cWeYX = BigInt("486")
		const addressf1UCAMS = accounts[1]
		const uintJVQHpam = BigInt("1488")
		const uintGjE0oHE = BigInt("1806")
		const uintotKTwVr = BigInt("1631")
		const uint8wdegw = BigInt("123")
//		const boolB9WIjW1 = await FrogDAOUuJktZu.transfer.call(addressf1UCAMS, uintg8cWeYX, {from: accounts[1]});
//		const uintsbw3bR = await FrogDAOUuJktZu.safeMul.call(uintGjE0oHE, uintJVQHpam, {from: accounts[1]});
//		const uintC1KJhz1 = await FrogDAOUuJktZu.safeAdd.call(uint8wdegw, uintotKTwVr, {from: accounts[2]});

		await expect(FrogDAOUuJktZu.transfer.call(addressf1UCAMS, uintg8cWeYX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOuKbU7C1 = await FrogDAO.new({from: accounts[2]});
		const addressKFkV8NF = accounts[5]
		const uintaYberIt = await FrogDAOuKbU7C1.balanceOf.call(addressKFkV8NF, {from: accounts[4]});
		const uintuhUwS2b = await FrogDAOuKbU7C1.totalSupply.call({from: accounts[4]});
		const uintafFmau = await FrogDAOuKbU7C1.totalSupply.call({from: accounts[4]});

		assert.equal(uintaYberIt, BigInt("0"))
		assert.equal(uintafFmau, BigInt("1000000000000000000000000"))
		assert.equal(uintuhUwS2b, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOcSBt3TP = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIr3RpxU = BigInt("1335")
		const uintDk6ESsf = BigInt("646")
		const uintO86Vpky = await FrogDAOcSBt3TP.totalSupply.call({from: accounts[3]});
		const uinthApLlbx = await FrogDAOcSBt3TP.totalSupply.call({from: accounts[2]});
		const uintbJGAg0 = await FrogDAOcSBt3TP.safeAdd.call(uintDk6ESsf, uintIr3RpxU, {from: accounts[3]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOcIAiha = await FrogDAO.new({from: accounts[2]});
		const addressC0XsarX = accounts[2]
		const uintIsUE3gv = BigInt("1286")
		const uintm0AlUlO = BigInt("240")
		const uintfYBwIf = BigInt("1658")
		const address9sGEhH = "0x0000000000000000000000000000000000000001"
		const uintAPLDKPS = await FrogDAOcIAiha.balanceOf.call(addressC0XsarX, {from: accounts[4]});
		const uintRPlKLe6 = await FrogDAOcIAiha.safeMul.call(uintm0AlUlO, uintIsUE3gv, {from: accounts[5]});
		const boolWQpZlZk = await FrogDAOcIAiha.approve.call(address9sGEhH, uintfYBwIf, {from: accounts[5]});
		const uintIpdz1yV = await FrogDAOcIAiha.totalSupply.call({from: accounts[1]});

		assert.equal(boolWQpZlZk, true)
		assert.equal(uintAPLDKPS, BigInt("1000000000000000000000000"))
		assert.equal(uintIpdz1yV, BigInt("1000000000000000000000000"))
		assert.equal(uintRPlKLe6, BigInt("308640"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOicCT9RX = await FrogDAO.new({from: accounts[5]});
		const uintKw6ZZTN = BigInt("509")
		const addressoK7LTDz = accounts[2]
		const uintxjH8Hlh = BigInt("366")
		const addressKDbDGQ = accounts[2]
		const addressFOUJrek = accounts[0]
		const addressUpvRNpg = "0x0000000000000000000000000000000000000001"
		const boolr5iT0Y = await FrogDAOicCT9RX.approve.call(addressoK7LTDz, uintKw6ZZTN, {from: accounts[3]});
		const uintXZsczFo = await FrogDAOicCT9RX.totalSupply.call({from: accounts[1]});
//		const boolxKQwcq3 = await FrogDAOicCT9RX.transferFrom.call(addressFOUJrek, addressKDbDGQ, uintxjH8Hlh, {from: accounts[2]});
//		const uintksY6mA = await FrogDAOicCT9RX.balanceOf.call(addressUpvRNpg, {from: accounts[2]});
//		const uintmmWOjiV = await FrogDAOicCT9RX.totalSupply.call({from: accounts[3]});

		assert.equal(boolr5iT0Y, true)
		assert.equal(uintXZsczFo, BigInt("1000000000000000000000000"))
		await expect(FrogDAOicCT9RX.transferFrom.call(addressFOUJrek, addressKDbDGQ, uintxjH8Hlh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOicCT9RX = await FrogDAO.new({from: accounts[5]});
		const uintLKaXrME = BigInt("509")
		const addressFdSOgt7 = accounts[2]
		const addressZsTUAFg = accounts[1]
		const uintG5TrjGP = BigInt("1172")
		const uintatnbIXZ = BigInt("1744")
		const addressQnPRukn = "0x0000000000000000000000000000000000000000"
		const uintQJyodEQ = BigInt("1485")
		const addressvsVUjcz = accounts[1]
		const boolr5iT0Y = await FrogDAOicCT9RX.approve.call(addressFdSOgt7, uintLKaXrME, {from: accounts[3]});
		const uintM8bxkae = await FrogDAOicCT9RX.balanceOf.call(addressZsTUAFg, {from: accounts[0]});
		const uintCOnMoor = await FrogDAOicCT9RX.safeAdd.call(uintatnbIXZ, uintG5TrjGP, {from: accounts[1]});
		const uintksY6mA = await FrogDAOicCT9RX.balanceOf.call(addressQnPRukn, {from: accounts[2]});
		const boolV7xsfL3 = await FrogDAOicCT9RX.approve.call(addressvsVUjcz, uintQJyodEQ, {from: accounts[2]});
		const uintmmWOjiV = await FrogDAOicCT9RX.totalSupply.call({from: accounts[3]});

		assert.equal(boolV7xsfL3, true)
		assert.equal(boolr5iT0Y, true)
		assert.equal(uintCOnMoor, BigInt("2916"))
		assert.equal(uintM8bxkae, BigInt("0"))
		assert.equal(uintksY6mA, BigInt("0"))
		assert.equal(uintmmWOjiV, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOeEiEXsT = await FrogDAO.new({from: accounts[4]});
		const uintriXhMbG = BigInt("387")
		const uintuV8CRl6 = BigInt("423")
		const uintjGU9zDb = BigInt("523")
		const addressO5RcQDQ = accounts[0]
		const addresssWAUn0 = accounts[0]
		const addressQvpeVs1 = accounts[3]
		const uintnD46Dwb = await FrogDAOeEiEXsT.safeSub.call(uintuV8CRl6, uintriXhMbG, {from: accounts[3]});
		const boolykZj5SI = await FrogDAOeEiEXsT.approve.call(addressO5RcQDQ, uintjGU9zDb, {from: accounts[2]});
		const uintYFeJpAR = await FrogDAOeEiEXsT.allowance.call(addressQvpeVs1, addresssWAUn0, {from: accounts[2]});
		const uintFTeKktz = await FrogDAOeEiEXsT.totalSupply.call({from: accounts[3]});
		const uintWxG3ETp = await FrogDAOeEiEXsT.totalSupply.call({from: accounts[3]});

		assert.equal(boolykZj5SI, true)
		assert.equal(uintFTeKktz, BigInt("1000000000000000000000000"))
		assert.equal(uintWxG3ETp, BigInt("1000000000000000000000000"))
		assert.equal(uintYFeJpAR, BigInt("0"))
		assert.equal(uintnD46Dwb, BigInt("36"))
	});
})