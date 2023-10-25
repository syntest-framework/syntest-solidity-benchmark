const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20DGeh55 = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttrQyJOa = BigInt("249")
		const uintpdbOSsp = BigInt("1351")
		const uintCK3VyN2 = BigInt("29")
		const uintOFfFAz = BigInt("772")
		await UNIWHALE_ERC20DGeh55.clearETH.call({from: accounts[0]});
		const uint256pHR4ijW = await UNIWHALE_ERC20DGeh55.startAirdrop.call(uintOFfFAz, uintCK3VyN2, uintpdbOSsp, uinttrQyJOa, {from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20JzSWwK5 = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintkzeFxzI = BigInt("709")
		const uintoHskGct = BigInt("1240")
		const uintIdoL5kP = BigInt("1400")
		const uintB6F5yn = BigInt("595")
		const addresse7qMgz = accounts[1]
		const uint256Nbn2hmB = await UNIWHALE_ERC20JzSWwK5.viewAirdrop.call({from: accounts[0]});
//		const uint256bAkCDmt = await UNIWHALE_ERC20JzSWwK5.startAirdrop.call(uintB6F5yn, uintIdoL5kP, uintoHskGct, uintkzeFxzI, {from: accounts[0]});
//		const uint256fTPCVea = await UNIWHALE_ERC20JzSWwK5.viewAirdrop.call({from: accounts[0]});
//		const uint256IhO2i2f = await UNIWHALE_ERC20JzSWwK5.viewAirdrop.call({from: accounts[1]});
//		const boolIDeAbS = await UNIWHALE_ERC20JzSWwK5.tokenSale.call(addresse7qMgz, {from: accounts[5]});

		await expect(UNIWHALE_ERC20JzSWwK5.startAirdrop.call(uintB6F5yn, uintIdoL5kP, uintoHskGct, uintkzeFxzI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20OXIk0dr = await UNIWHALE_ERC20.new({from: accounts[5]});
		const addressaBcvfSW = accounts[2]
		const uint44xWIm = BigInt("1831")
		const uintZkDYJIy = BigInt("689")
		const uintH0tUsUH = BigInt("935")
		const uintNs95Zpw = BigInt("1069")
		const uint256zAIH57m = await UNIWHALE_ERC20OXIk0dr.viewAirdrop.call({from: accounts[3]});
//		const boolFGaSpQ5 = await UNIWHALE_ERC20OXIk0dr.tokenSale.call(addressaBcvfSW, {from: accounts[5]});
//		await UNIWHALE_ERC20OXIk0dr.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256ayXuUPg = await UNIWHALE_ERC20OXIk0dr.startAirdrop.call(uintNs95Zpw, uintH0tUsUH, uintZkDYJIy, uint44xWIm, {from: accounts[3]});
//		await UNIWHALE_ERC20OXIk0dr.clearETH.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20OXIk0dr.tokenSale.call(addressaBcvfSW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20skR27t = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addresstWPBcST = accounts[5]
		const uintuxXiLeV = BigInt("558")
		const uintYJNIq8c = BigInt("898")
		const uintPg6MTwz = BigInt("1395")
		const uintr3zO738 = BigInt("1570")
		const uintBGbezpA = BigInt("1782")
		const uintv87FX5p = BigInt("1828")
		const uintXqgldDR = BigInt("211")
		const uintAX4VVMB = BigInt("958")
		const uintAVKTgSl = BigInt("1847")
		const addressjJK5nKN = accounts[2]
		const uint256OZysN9X = await UNIWHALE_ERC20skR27t.viewSale.call({from: accounts[1]});
//		const boolfSvoypn = await UNIWHALE_ERC20skR27t.getAirdrop.call(addresstWPBcST, {from: accounts[5]});
//		const uint256F34Oe7 = await UNIWHALE_ERC20skR27t.startAirdrop.call(uintr3zO738, uintPg6MTwz, uintYJNIq8c, uintuxXiLeV, {from: accounts[2]});
//		const uint256HDd0kEl = await UNIWHALE_ERC20skR27t.startSale.call(uintAVKTgSl, uintAX4VVMB, uintXqgldDR, uintv87FX5p, uintBGbezpA, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnGbcFW3 = await UNIWHALE_ERC20skR27t.getAirdrop.call(addressjJK5nKN, {from: accounts[3]});

		await expect(UNIWHALE_ERC20skR27t.getAirdrop.call(addresstWPBcST, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20TZ7yNDZ = await UNIWHALE_ERC20.new({from: accounts[5]});
		const uintXuHKFJr = BigInt("1190")
		const uinthafniti = BigInt("54")
		const uintj3nwZUN = BigInt("1152")
		const uint6Yxiy5 = BigInt("1008")
		const uint256MvfBKq = await UNIWHALE_ERC20TZ7yNDZ.viewSale.call({from: accounts[1]});
		const uint256NpnnnSZ = await UNIWHALE_ERC20TZ7yNDZ.startAirdrop.call(uint6Yxiy5, uintj3nwZUN, uinthafniti, uintXuHKFJr, {from: accounts[5]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20YZm9ztz = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintVsePswp = BigInt("783")
		const uintxhtizz = BigInt("1913")
		const uintjm2LJw = BigInt("177")
		const uintprTp6W6 = BigInt("1023")
		const uintT8adaBx = BigInt("584")
		const addressBZwi0ck = "0x0000000000000000000000000000000000000002"
		const uintvu1HMv = BigInt("952")
		const uintUFSyFz = BigInt("1396")
		const uintR51bXTF = BigInt("461")
		const uintXHQwIAh = BigInt("513")
		const uint256tMaIaPl = await UNIWHALE_ERC20YZm9ztz.viewAirdrop.call({from: accounts[4]});
		const uint256y2zkhjk = await UNIWHALE_ERC20YZm9ztz.startSale.call(uintT8adaBx, uintprTp6W6, uintjm2LJw, uintxhtizz, uintVsePswp, {from: accounts[1]});
//		const boolZowNPN = await UNIWHALE_ERC20YZm9ztz.getAirdrop.call(addressBZwi0ck, {from: accounts[0]});
//		const uint256Ba6kJV7 = await UNIWHALE_ERC20YZm9ztz.startAirdrop.call(uintXHQwIAh, uintR51bXTF, uintUFSyFz, uintvu1HMv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20YZm9ztz.getAirdrop.call(addressBZwi0ck, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20TLL6XYa = await UNIWHALE_ERC20.new({from: accounts[1]});
		const addressbcFXCc = accounts[3]
		const uinteLY9BWI = BigInt("1918")
		const uintABc4Yuj = BigInt("1563")
		const uintJ3bP1OO = BigInt("482")
		const uintTqDUtmq = BigInt("711")
		const uintIK7potd = BigInt("935")
		const addressIWN9Pg = accounts[1]
//		await UNIWHALE_ERC20TLL6XYa.clearETH.call({from: accounts[1]});
//		const uint256pr9K6m = await UNIWHALE_ERC20TLL6XYa.viewSale.call({from: accounts[1]});
//		const booldXy8yfU = await UNIWHALE_ERC20TLL6XYa.tokenSale.call(addressbcFXCc, {from: accounts[3]});
//		const uint256AkOYt1x = await UNIWHALE_ERC20TLL6XYa.startSale.call(uintIK7potd, uintTqDUtmq, uintJ3bP1OO, uintABc4Yuj, uinteLY9BWI, {from: accounts[2]});
//		const uint256pJ1dEjR = await UNIWHALE_ERC20TLL6XYa.viewSale.call({from: accounts[0]});
//		const boolHfvE6TX = await UNIWHALE_ERC20TLL6XYa.tokenSale.call(addressIWN9Pg, {from: accounts[3]});

		await expect(UNIWHALE_ERC20TLL6XYa.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})