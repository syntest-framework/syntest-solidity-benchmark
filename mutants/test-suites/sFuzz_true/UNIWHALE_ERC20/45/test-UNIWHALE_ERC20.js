const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20uRLDamq = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintXmzq6qr = BigInt("977")
		const uintpvO2sjf = BigInt("345")
		const uintjsKxwxn = BigInt("236")
		const uintHkpp04e = BigInt("1305")
		const uint256kHLPl87 = await UNIWHALE_ERC20uRLDamq.viewSale.call({from: accounts[4]});
//		await UNIWHALE_ERC20uRLDamq.clearETH.call({from: accounts[0]});
//		const uint256uLvyjmV = await UNIWHALE_ERC20uRLDamq.startAirdrop.call(uintHkpp04e, uintjsKxwxn, uintpvO2sjf, uintXmzq6qr, {from: accounts[0]});
//		await UNIWHALE_ERC20uRLDamq.clearETH.call({from: accounts[2]});
//		const uint25604iap5 = await UNIWHALE_ERC20uRLDamq.viewAirdrop.call({from: accounts[5]});
//		const uint256X2AFlD = await UNIWHALE_ERC20uRLDamq.viewAirdrop.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20uRLDamq.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20XMEWYov = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshQgahLE = accounts[1]
		const uintUsQLNWv = BigInt("1013")
		const uintL8tnpn = BigInt("750")
		const uintuyfFVlA = BigInt("1798")
		const uintRyNb08l = BigInt("326")
		const uintGt3sXaW = BigInt("1008")
		const uintItLW0O4 = BigInt("1678")
		const uintfXYfU6V = BigInt("1410")
		const uintFTteeUn = BigInt("1746")
		const uintXuOtI1A = BigInt("1184")
		const boolPZIXQ2w = await UNIWHALE_ERC20XMEWYov.getAirdrop.call(addresshQgahLE, {from: accounts[3]});
		const uint256GTb35kF = await UNIWHALE_ERC20XMEWYov.startAirdrop.call(uintRyNb08l, uintuyfFVlA, uintL8tnpn, uintUsQLNWv, {from: accounts[2]});
		const uint256Czv5hJg = await UNIWHALE_ERC20XMEWYov.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256C2xbTiV = await UNIWHALE_ERC20XMEWYov.startSale.call(uintXuOtI1A, uintFTteeUn, uintfXYfU6V, uintItLW0O4, uintGt3sXaW, {from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20K6AwkYt = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressZOCpuIT = accounts[3]
		const addressBDiP15n = accounts[0]
//		const boolDFoxgW = await UNIWHALE_ERC20K6AwkYt.getAirdrop.call(addressZOCpuIT, {from: accounts[4]});
//		await UNIWHALE_ERC20K6AwkYt.clearETH.call({from: accounts[5]});
//		const uint256ajZ95Gv = await UNIWHALE_ERC20K6AwkYt.viewSale.call({from: accounts[1]});
//		const boolBQJkXGo = await UNIWHALE_ERC20K6AwkYt.tokenSale.call(addressBDiP15n, {from: accounts[5]});

		await expect(UNIWHALE_ERC20K6AwkYt.getAirdrop.call(addressZOCpuIT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20e3Dy6uZ = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressR0Jbv9P = accounts[5]
//		const booldEX7IKC = await UNIWHALE_ERC20e3Dy6uZ.tokenSale.call(addressR0Jbv9P, {from: accounts[4]});
//		const uint256MG6X635 = await UNIWHALE_ERC20e3Dy6uZ.viewSale.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20e3Dy6uZ.tokenSale.call(addressR0Jbv9P, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20XUwn0qo = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uint256pM9ccr = await UNIWHALE_ERC20XUwn0qo.viewSale.call({from: accounts[1]});
		const uint256eNZPAu = await UNIWHALE_ERC20XUwn0qo.viewSale.call({from: accounts[0]});
		const uint256e6Adox2 = await UNIWHALE_ERC20XUwn0qo.viewAirdrop.call({from: accounts[4]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20e3Dy6uZ = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintvc5ZlT9 = BigInt("1209")
		const uintlcawNWW = BigInt("784")
		const uintUWfmda5 = BigInt("1935")
		const uintdPdwoGQ = BigInt("1493")
		const uinthwg6mlN = BigInt("1834")
		const uint256Y84cQYU = await UNIWHALE_ERC20e3Dy6uZ.viewAirdrop.call({from: accounts[4]});
		const uint256HmcUH2m = await UNIWHALE_ERC20e3Dy6uZ.startSale.call(uinthwg6mlN, uintdPdwoGQ, uintUWfmda5, uintlcawNWW, uintvc5ZlT9, {from: accounts[4]});
		const uint256MG6X635 = await UNIWHALE_ERC20e3Dy6uZ.viewSale.call({from: accounts[3]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20e3Dy6uZ = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintEiekyzm = BigInt("917")
		const uintB5SuC7t = BigInt("1602")
		const uint6xkDT6 = BigInt("1671")
		const uintfO5r6SW = BigInt("1058")
		const uint256MG6X635 = await UNIWHALE_ERC20e3Dy6uZ.viewSale.call({from: accounts[3]});
		const uint256sn1Zzgd = await UNIWHALE_ERC20e3Dy6uZ.startAirdrop.call(uintfO5r6SW, uint6xkDT6, uintB5SuC7t, uintEiekyzm, {from: accounts[4]});
		const uint256TqaC0Fy = await UNIWHALE_ERC20e3Dy6uZ.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20UuhcsGM = await UNIWHALE_ERC20.new({from: accounts[5]});
		const addressGSUGyBg = accounts[3]
		const uint256sD9VVRz = await UNIWHALE_ERC20UuhcsGM.viewSale.call({from: accounts[0]});
		const uint256mAnQpar = await UNIWHALE_ERC20UuhcsGM.viewSale.call({from: accounts[4]});
//		await UNIWHALE_ERC20UuhcsGM.clearETH.call({from: accounts[5]});
//		const booliXWsJm7 = await UNIWHALE_ERC20UuhcsGM.getAirdrop.call(addressGSUGyBg, {from: accounts[3]});

		await expect(UNIWHALE_ERC20UuhcsGM.clearETH.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})