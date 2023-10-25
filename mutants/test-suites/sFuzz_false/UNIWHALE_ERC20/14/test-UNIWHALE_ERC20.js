const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20kumOu4r = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintFEc9Zos = BigInt("1453")
		const uintNYsADqZ = BigInt("1327")
		const uintXGhGEFV = BigInt("541")
		const uintxJtm5jx = BigInt("351")
		const addressDbIaJWP = accounts[1]
//		const uint256pE0jjr0 = await UNIWHALE_ERC20kumOu4r.startAirdrop.call(uintxJtm5jx, uintXGhGEFV, uintNYsADqZ, uintFEc9Zos, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgiqYwfv = await UNIWHALE_ERC20kumOu4r.tokenSale.call(addressDbIaJWP, {from: accounts[5]});

		await expect(UNIWHALE_ERC20kumOu4r.startAirdrop.call(uintxJtm5jx, uintXGhGEFV, uintNYsADqZ, uintFEc9Zos, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20I4QqwK = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressdxfYBEA = "0x0000000000000000000000000000000000000001"
		const addressEa7zsZg = accounts[4]
		const uintOHyE1I6 = BigInt("1132")
		const uintm9Uk4n = BigInt("1203")
		const uintVu4wtu8 = BigInt("1357")
		const uintXOWJRIG = BigInt("1745")
		const uintYrDGvri = BigInt("980")
//		const boolCMLa8hp = await UNIWHALE_ERC20I4QqwK.getAirdrop.call(addressdxfYBEA, {from: accounts[4]});
//		const booldUxDIS = await UNIWHALE_ERC20I4QqwK.tokenSale.call(addressEa7zsZg, {from: accounts[1]});
//		const uint256BuNG8jU = await UNIWHALE_ERC20I4QqwK.startSale.call(uintYrDGvri, uintXOWJRIG, uintVu4wtu8, uintm9Uk4n, uintOHyE1I6, {from: accounts[1]});

		await expect(UNIWHALE_ERC20I4QqwK.getAirdrop.call(addressdxfYBEA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20f88oyqC = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uinte4F6LCQ = BigInt("1479")
		const uintcI1HM5p = BigInt("813")
		const uintHqoWjoW = BigInt("579")
		const uintbkkA0Uj = BigInt("948")
		await UNIWHALE_ERC20f88oyqC.clearETH.call({from: accounts[1]});
		const uint256tRdlV5 = await UNIWHALE_ERC20f88oyqC.startAirdrop.call(uintbkkA0Uj, uintHqoWjoW, uintcI1HM5p, uinte4F6LCQ, {from: accounts[3]});
		const uint256xp1j7xH = await UNIWHALE_ERC20f88oyqC.viewSale.call({from: accounts[2]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20XHcWktQ = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintIFB50Q = BigInt("649")
		const uintCphpICI = BigInt("1040")
		const uintzavAMGh = BigInt("1190")
		const uintBJYJhF5 = BigInt("739")
		const addressFhhAqdJ = accounts[1]
		const uint256pJKxP6g = await UNIWHALE_ERC20XHcWktQ.startAirdrop.call(uintBJYJhF5, uintzavAMGh, uintCphpICI, uintIFB50Q, {from: accounts[2]});
		const uint256VrvVdNK = await UNIWHALE_ERC20XHcWktQ.viewAirdrop.call({from: accounts[5]});
		const uint256bRNjq89 = await UNIWHALE_ERC20XHcWktQ.viewAirdrop.call({from: accounts[5]});
//		const boolYPlouNj = await UNIWHALE_ERC20XHcWktQ.getAirdrop.call(addressFhhAqdJ, {from: accounts[2]});

		await expect(UNIWHALE_ERC20XHcWktQ.getAirdrop.call(addressFhhAqdJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20ZH1Z3yr = await UNIWHALE_ERC20.new({from: accounts[5]});
		const addressJzc6nP1 = accounts[4]
//		const boolniS3MuF = await UNIWHALE_ERC20ZH1Z3yr.tokenSale.call(addressJzc6nP1, {from: accounts[2]});
//		const uint256dnlsylC = await UNIWHALE_ERC20ZH1Z3yr.viewAirdrop.call({from: accounts[4]});
//		const uint256xxnYB9Y = await UNIWHALE_ERC20ZH1Z3yr.viewSale.call({from: accounts[2]});

		await expect(UNIWHALE_ERC20ZH1Z3yr.tokenSale.call(addressJzc6nP1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20ZH1Z3yr = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uint256dnlsylC = await UNIWHALE_ERC20ZH1Z3yr.viewAirdrop.call({from: accounts[4]});
		const uint256xxnYB9Y = await UNIWHALE_ERC20ZH1Z3yr.viewSale.call({from: accounts[2]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20I4QqwK = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressg3IBwlk = "0x0000000000000000000000000000000000000000"
//		await UNIWHALE_ERC20I4QqwK.clearETH.call({from: accounts[4]});
//		const boolCMLa8hp = await UNIWHALE_ERC20I4QqwK.getAirdrop.call(addressg3IBwlk, {from: accounts[4]});

		await expect(UNIWHALE_ERC20I4QqwK.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20I4QqwK = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintmFmZYTG = BigInt("382")
		const uintI8vfJGI = BigInt("1891")
		const uintnehFtEz = BigInt("598")
		const uint6Qwjo2 = BigInt("2015")
		const uintAiqVc3W = BigInt("956")
		const addressm8UVw65 = "0x0000000000000000000000000000000000000001"
		const uint256BjN0oL = await UNIWHALE_ERC20I4QqwK.startSale.call(uintAiqVc3W, uint6Qwjo2, uintnehFtEz, uintI8vfJGI, uintmFmZYTG, {from: accounts[4]});
//		const boolCMLa8hp = await UNIWHALE_ERC20I4QqwK.getAirdrop.call(addressm8UVw65, {from: accounts[4]});
//		await UNIWHALE_ERC20I4QqwK.clearETH.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20I4QqwK.getAirdrop.call(addressm8UVw65, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})