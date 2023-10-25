const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20hC1ve5 = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressl981Xl0 = accounts[2]
		const addressTBljsjJ = accounts[2]
		const addressxSBu09 = accounts[2]
		const boolRN072eT = await UNIWHALE_ERC20hC1ve5.tokenSale.call(addressl981Xl0, {from: accounts[5]});
		const boolukmwWpC = await UNIWHALE_ERC20hC1ve5.tokenSale.call(addressTBljsjJ, {from: accounts[3]});
		const boolv6B62jV = await UNIWHALE_ERC20hC1ve5.getAirdrop.call(addressxSBu09, {from: accounts[5]});
		const uint2561TR4yp = await UNIWHALE_ERC20hC1ve5.viewSale.call({from: accounts[5]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20saT0qz6 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addresstcgu33m = accounts[2]
		const addresswWs1Dnt = accounts[0]
//		const boolguksun6 = await UNIWHALE_ERC20saT0qz6.tokenSale.call(addresstcgu33m, {from: accounts[4]});
//		const boolpPczzkR = await UNIWHALE_ERC20saT0qz6.getAirdrop.call(addresswWs1Dnt, {from: accounts[0]});
//		const uint256FV3YCk5 = await UNIWHALE_ERC20saT0qz6.viewSale.call({from: accounts[1]});
//		await UNIWHALE_ERC20saT0qz6.clearETH.call({from: accounts[1]});

		await expect(UNIWHALE_ERC20saT0qz6.tokenSale.call(addresstcgu33m, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20fqYMIJS = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintZEAJyWT = BigInt("2036")
		const uintVtEudAV = BigInt("86")
		const uintGQ42sKp = BigInt("889")
		const uintGtSWNhV = BigInt("1663")
		const uintIaOciPk = BigInt("1159")
		const addressgb8uOAb = accounts[2]
		const uint256gAXmLOS = await UNIWHALE_ERC20fqYMIJS.startSale.call(uintIaOciPk, uintGtSWNhV, uintGQ42sKp, uintVtEudAV, uintZEAJyWT, {from: accounts[2]});
		const uint256PAgFEPk = await UNIWHALE_ERC20fqYMIJS.viewAirdrop.call({from: accounts[1]});
//		const boolmoZ93n = await UNIWHALE_ERC20fqYMIJS.getAirdrop.call(addressgb8uOAb, {from: accounts[1]});
//		const uint256L9yu7Im = await UNIWHALE_ERC20fqYMIJS.viewSale.call({from: accounts[2]});
//		await UNIWHALE_ERC20fqYMIJS.clearETH.call({from: accounts[5]});

		await expect(UNIWHALE_ERC20fqYMIJS.getAirdrop.call(addressgb8uOAb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20LEHrjQB = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintZVNroLk = BigInt("1176")
		const uintR1K2Dp = BigInt("268")
		const uinttX7lb7g = BigInt("482")
		const uintYZppF7H = BigInt("480")
		const uintGDqzJnA = BigInt("1221")
		const uintA4OB32I = BigInt("912")
		const uintyIMuQ3 = BigInt("2035")
		const uinttKn2LFN = BigInt("1312")
		const uintnR78tvl = BigInt("911")
		const uintMJz3x5 = BigInt("1324")
		const uintJ0byMJ8 = BigInt("1153")
		const uintSFEqEYC = BigInt("1983")
		const uintu2bA86t = BigInt("369")
		const uintsoLA7Kc = BigInt("1630")
		const addressuXtM7vB = accounts[2]
		const uint256eUCWtUv = await UNIWHALE_ERC20LEHrjQB.startSale.call(uintGDqzJnA, uintYZppF7H, uinttX7lb7g, uintR1K2Dp, uintZVNroLk, {from: accounts[0]});
		const uint256jY0BhjG = await UNIWHALE_ERC20LEHrjQB.viewSale.call({from: accounts[3]});
//		await UNIWHALE_ERC20LEHrjQB.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256MnUP9wa = await UNIWHALE_ERC20LEHrjQB.startSale.call(uintMJz3x5, uintnR78tvl, uinttKn2LFN, uintyIMuQ3, uintA4OB32I, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256xaBpX2R = await UNIWHALE_ERC20LEHrjQB.startAirdrop.call(uintsoLA7Kc, uintu2bA86t, uintSFEqEYC, uintJ0byMJ8, {from: accounts[0]});
//		const uint256MgyZCQS = await UNIWHALE_ERC20LEHrjQB.viewSale.call({from: accounts[4]});
//		const uint256xUnwp99 = await UNIWHALE_ERC20LEHrjQB.viewSale.call({from: accounts[0]});
//		const boolQkCEPyK = await UNIWHALE_ERC20LEHrjQB.getAirdrop.call(addressuXtM7vB, {from: accounts[3]});

		await expect(UNIWHALE_ERC20LEHrjQB.clearETH.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20DgE1C2W = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uintR22UkUj = BigInt("281")
		const uintgM0ahOr = BigInt("752")
		const uintjG85l47 = BigInt("1938")
		const uinthbqj89F = BigInt("844")
		const addressTThwS0y = "0x0000000000000000000000000000000000000001"
		const addressVcBUBIB = accounts[3]
		const uint256dA904Sv = await UNIWHALE_ERC20DgE1C2W.startAirdrop.call(uinthbqj89F, uintjG85l47, uintgM0ahOr, uintR22UkUj, {from: accounts[2]});
//		const boollPQJewU = await UNIWHALE_ERC20DgE1C2W.tokenSale.call(addressTThwS0y, {from: accounts[0]});
//		const boolJ2ddR3 = await UNIWHALE_ERC20DgE1C2W.tokenSale.call(addressVcBUBIB, {from: accounts[2]});
//		const uint256IejgWc5 = await UNIWHALE_ERC20DgE1C2W.viewSale.call({from: accounts[2]});

		await expect(UNIWHALE_ERC20DgE1C2W.tokenSale.call(addressTThwS0y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20saT0qz6 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressGktwhVY = accounts[3]
		const addressvjPtPQo = accounts[0]
//		await UNIWHALE_ERC20saT0qz6.clearETH.call({from: accounts[4]});
//		const boolguksun6 = await UNIWHALE_ERC20saT0qz6.tokenSale.call(addressGktwhVY, {from: accounts[4]});
//		const boolpPczzkR = await UNIWHALE_ERC20saT0qz6.getAirdrop.call(addressvjPtPQo, {from: accounts[0]});
//		const uint256FV3YCk5 = await UNIWHALE_ERC20saT0qz6.viewSale.call({from: accounts[1]});
//		await UNIWHALE_ERC20saT0qz6.clearETH.call({from: accounts[1]});

		await expect(UNIWHALE_ERC20saT0qz6.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})