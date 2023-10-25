const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20TU6yvS9 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uinthkWAeuN = BigInt("1511")
		const uintUjBbY9Y = BigInt("767")
		const uintouZfROq = BigInt("1616")
		const uintE6AWix5 = BigInt("834")
		const uintHZ5nvc = BigInt("762")
		const uintqJ2kAzp = BigInt("1861")
		const uintXeciyrM = BigInt("213")
		const uintYbRguY2 = BigInt("769")
		const uintPYEsNTT = BigInt("1782")
		const uint256zIcGOi8 = await UNIWHALE_ERC20TU6yvS9.viewSale.call({from: accounts[2]});
//		const uint256RYvShHO = await UNIWHALE_ERC20TU6yvS9.startAirdrop.call(uintE6AWix5, uintouZfROq, uintUjBbY9Y, uinthkWAeuN, {from: accounts[1]});
//		const uint256g4yvm0C = await UNIWHALE_ERC20TU6yvS9.startSale.call(uintPYEsNTT, uintYbRguY2, uintXeciyrM, uintqJ2kAzp, uintHZ5nvc, {from: accounts[3]});

		await expect(UNIWHALE_ERC20TU6yvS9.startAirdrop.call(uintE6AWix5, uintouZfROq, uintUjBbY9Y, uinthkWAeuN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20vMBqRGj = await UNIWHALE_ERC20.new({from: accounts[1]});
		const addressaRULwhV = accounts[2]
		const uintGxhH3Ao = BigInt("1880")
		const uintfK37A00 = BigInt("1207")
		const uintkm9bgdS = BigInt("136")
		const uintajZsaxy = BigInt("1018")
		const uintPFQ2L5K = BigInt("973")
		const uintFMwjSnK = BigInt("679")
		const uintjRhrxYJ = BigInt("67")
		const uintRVdcJAx = BigInt("1816")
		const uintzy9wuR = BigInt("1001")
		const uintntLafF4 = BigInt("332")
//		const boolfG1qHP0 = await UNIWHALE_ERC20vMBqRGj.tokenSale.call(addressaRULwhV, {from: accounts[3]});
//		const uint256TGTdCyL = await UNIWHALE_ERC20vMBqRGj.viewAirdrop.call({from: accounts[2]});
//		const uint256WuKwwgx = await UNIWHALE_ERC20vMBqRGj.startSale.call(uintPFQ2L5K, uintajZsaxy, uintkm9bgdS, uintfK37A00, uintGxhH3Ao, {from: accounts[0]});
//		const uint256h18lUx = await UNIWHALE_ERC20vMBqRGj.startSale.call(uintntLafF4, uintzy9wuR, uintRVdcJAx, uintjRhrxYJ, uintFMwjSnK, {from: accounts[0]});

		await expect(UNIWHALE_ERC20vMBqRGj.tokenSale.call(addressaRULwhV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20kSaFHrS = await UNIWHALE_ERC20.new({from: accounts[1]});
		const addressu1Avuhj = accounts[2]
		const uint256dAWuoYc = await UNIWHALE_ERC20kSaFHrS.viewAirdrop.call({from: accounts[3]});
//		const boolK7LIl21 = await UNIWHALE_ERC20kSaFHrS.getAirdrop.call(addressu1Avuhj, {from: accounts[4]});
//		await UNIWHALE_ERC20kSaFHrS.clearETH.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20kSaFHrS.getAirdrop.call(addressu1Avuhj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20vGToEhw = await UNIWHALE_ERC20.new({from: accounts[1]});
		const addressBfazeTv = accounts[2]
//		await UNIWHALE_ERC20vGToEhw.clearETH.call({from: accounts[1]});
//		const uint256Xzx2B7b = await UNIWHALE_ERC20vGToEhw.viewSale.call({from: accounts[4]});
//		const boolCtBWpsL = await UNIWHALE_ERC20vGToEhw.tokenSale.call(addressBfazeTv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20vGToEhw.clearETH.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20kSaFHrS = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintL9WbKxD = BigInt("218")
		const uintGRIJn6s = BigInt("419")
		const uintT8b7AGT = BigInt("1769")
		const uintKcxR6m5 = BigInt("560")
		const uintPgM33kD = BigInt("757")
		const uinte6asixn = BigInt("1767")
		const uintuyHqzDN = BigInt("313")
		const uintu2heQgV = BigInt("632")
		const uint256ePgYXEo = await UNIWHALE_ERC20kSaFHrS.startAirdrop.call(uintKcxR6m5, uintT8b7AGT, uintGRIJn6s, uintL9WbKxD, {from: accounts[1]});
		const uint256dAWuoYc = await UNIWHALE_ERC20kSaFHrS.viewAirdrop.call({from: accounts[3]});
//		await UNIWHALE_ERC20kSaFHrS.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256DVEqIH4 = await UNIWHALE_ERC20kSaFHrS.startAirdrop.call(uintu2heQgV, uintuyHqzDN, uinte6asixn, uintPgM33kD, {from: accounts[4]});

		await expect(UNIWHALE_ERC20kSaFHrS.clearETH.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20vyitMh1 = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uint05LSby = BigInt("205")
		const uint0o6eFx = BigInt("804")
		const uintdrL25LS = BigInt("1643")
		const uinthFMofTU = BigInt("855")
		const uintp5W4Kk = BigInt("1487")
		const uint256ij3dRGz = await UNIWHALE_ERC20vyitMh1.viewSale.call({from: accounts[4]});
		const uint256SK8yEj7 = await UNIWHALE_ERC20vyitMh1.viewAirdrop.call({from: accounts[1]});
		const uint256Tg4qnLB = await UNIWHALE_ERC20vyitMh1.startSale.call(uintp5W4Kk, uinthFMofTU, uintdrL25LS, uint0o6eFx, uint05LSby, {from: accounts[3]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20kSaFHrS = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintGVJ5A6z = BigInt("1417")
		const uintX0wcY6F = BigInt("1267")
		const uintIEzGwx4 = BigInt("999")
		const uintNjd1BgI = BigInt("1384")
		const uintVk2ngae = BigInt("2021")
		const uintrewIVxr = BigInt("1165")
		const uintakbExiK = BigInt("548")
		const uintII5OoUd = BigInt("789")
		const uintXgLbzOB = BigInt("1703")
		const uint256oqBr90v = await UNIWHALE_ERC20kSaFHrS.startSale.call(uintVk2ngae, uintNjd1BgI, uintIEzGwx4, uintX0wcY6F, uintGVJ5A6z, {from: accounts[1]});
//		const uint256A331oh = await UNIWHALE_ERC20kSaFHrS.startAirdrop.call(uintXgLbzOB, uintII5OoUd, uintakbExiK, uintrewIVxr, {from: accounts[2]});
//		const uint256dAWuoYc = await UNIWHALE_ERC20kSaFHrS.viewAirdrop.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20kSaFHrS.startAirdrop.call(uintXgLbzOB, uintII5OoUd, uintakbExiK, uintrewIVxr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})