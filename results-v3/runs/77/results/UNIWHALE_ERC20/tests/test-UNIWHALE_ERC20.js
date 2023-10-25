const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20aqMj2Y2 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uint256fdpq2Mv = await UNIWHALE_ERC20aqMj2Y2.viewAirdrop.call({from: accounts[2]});
		const uint256mk3fG2 = await UNIWHALE_ERC20aqMj2Y2.viewAirdrop.call({from: accounts[2]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20dBY6LWI = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintSf79k98 = BigInt("1426")
		const uintlfj8ds2 = BigInt("1026")
		const uintJ3yAalD = BigInt("799")
		const uintgLLpDNb = BigInt("268")
		const uintoQDVfi5 = BigInt("190")
		const addressKAAjKr = accounts[3]
		const addressWzgQ8yK = accounts[1]
		const uint256oL9HP4M = await UNIWHALE_ERC20dBY6LWI.startSale.call(uintoQDVfi5, uintgLLpDNb, uintJ3yAalD, uintlfj8ds2, uintSf79k98, {from: accounts[2]});
		await UNIWHALE_ERC20dBY6LWI.clearETH.call({from: accounts[2]});
		const boolUjarQV = await UNIWHALE_ERC20dBY6LWI.getAirdrop.call(addressKAAjKr, {from: "0x0000000000000000000000000000000000000001"});
		const boolR7li5Iz = await UNIWHALE_ERC20dBY6LWI.tokenSale.call(addressWzgQ8yK, {from: accounts[0]});
		const uint256TtMqs0 = await UNIWHALE_ERC20dBY6LWI.viewSale.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20dBY6LWI.startSale.call(uintoQDVfi5, uintgLLpDNb, uintJ3yAalD, uintlfj8ds2, uintSf79k98, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20BbALwRP = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addresshoPK3tF = accounts[4]
		const uinthAOCxlT = BigInt("1876")
		const uintDHrrUS = BigInt("1818")
		const uintYfsgHF = BigInt("1277")
		const uintE4IFgg2 = BigInt("1388")
		const uintOf5NZDe = BigInt("214")
		const addressfRit3QE = accounts[5]
		const uint256IaHQN6x = await UNIWHALE_ERC20BbALwRP.viewAirdrop.call({from: accounts[2]});
		const boolJCHtGX7 = await UNIWHALE_ERC20BbALwRP.tokenSale.call(addresshoPK3tF, {from: accounts[5]});
		const uint256NTMtpCI = await UNIWHALE_ERC20BbALwRP.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256RC8dyvB = await UNIWHALE_ERC20BbALwRP.startSale.call(uintOf5NZDe, uintE4IFgg2, uintYfsgHF, uintDHrrUS, uinthAOCxlT, {from: accounts[1]});
		const uint256DADJatv = await UNIWHALE_ERC20BbALwRP.viewSale.call({from: "0x0000000000000000000000000000000000000001"});
		const boolX3HtOXO = await UNIWHALE_ERC20BbALwRP.tokenSale.call(addressfRit3QE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20BbALwRP.tokenSale.call(addresshoPK3tF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20vsJ311 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintXyKrN0t = BigInt("1123")
		const uintvmxuCSs = BigInt("899")
		const uinttKmMMVC = BigInt("694")
		const uintejnNk98 = BigInt("1178")
		const uintC0tkLyC = BigInt("1500")
		await UNIWHALE_ERC20vsJ311.clearETH.call({from: accounts[3]});
		const uint256Xj7Hgw = await UNIWHALE_ERC20vsJ311.startSale.call(uintC0tkLyC, uintejnNk98, uinttKmMMVC, uintvmxuCSs, uintXyKrN0t, {from: accounts[1]});

		await expect(UNIWHALE_ERC20vsJ311.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20KcWQwoC = await UNIWHALE_ERC20.new({from: accounts[5]});
		const addressL74GQE4 = accounts[0]
		const addressCHWUjWu = accounts[3]
		const addressHaPSe7Q = accounts[4]
		const addressF7X0GD = accounts[4]
		const addressIEZRar = accounts[2]
		const boolj8QiwJ7 = await UNIWHALE_ERC20KcWQwoC.getAirdrop.call(addressL74GQE4, {from: "0x0000000000000000000000000000000000000001"});
		const booldqRVgGY = await UNIWHALE_ERC20KcWQwoC.getAirdrop.call(addressCHWUjWu, {from: accounts[3]});
		const boolilW1kR = await UNIWHALE_ERC20KcWQwoC.getAirdrop.call(addressHaPSe7Q, {from: accounts[4]});
		const boolwwg5ScW = await UNIWHALE_ERC20KcWQwoC.getAirdrop.call(addressF7X0GD, {from: accounts[2]});
		await UNIWHALE_ERC20KcWQwoC.clearETH.call({from: accounts[0]});
		const boolAnGzLdX = await UNIWHALE_ERC20KcWQwoC.tokenSale.call(addressIEZRar, {from: accounts[4]});

		await expect(UNIWHALE_ERC20KcWQwoC.getAirdrop.call(addressL74GQE4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20vsJ311 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintkRQjdjD = BigInt("1517")
		const uintfZhVSCV = BigInt("448")
		const uintj6hqbRq = BigInt("507")
		const uintKpodYb2 = BigInt("29")
		const uintCKo3nps = BigInt("238")
		const uintfl9RIH2 = BigInt("1123")
		const uintZRjZeMv = BigInt("899")
		const uintMmzEQRs = BigInt("694")
		const uintJlDtaqt = BigInt("1178")
		const uintaO0rCUI = BigInt("1500")
		const uint256mgZfwm = await UNIWHALE_ERC20vsJ311.viewSale.call({from: accounts[4]});
		await UNIWHALE_ERC20vsJ311.clearETH.call({from: accounts[3]});
		const uint256o5kEcqA = await UNIWHALE_ERC20vsJ311.startSale.call(uintCKo3nps, uintKpodYb2, uintj6hqbRq, uintfZhVSCV, uintkRQjdjD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Xj7Hgw = await UNIWHALE_ERC20vsJ311.startSale.call(uintaO0rCUI, uintJlDtaqt, uintMmzEQRs, uintZRjZeMv, uintfl9RIH2, {from: accounts[1]});

		await expect(UNIWHALE_ERC20vsJ311.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20SpaITSo = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressS3uwsfI = accounts[0]
		const addressgInuDDq = accounts[5]
		const addressAWrXf4z = accounts[0]
		await UNIWHALE_ERC20SpaITSo.clearETH.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rnpO3s0 = await UNIWHALE_ERC20SpaITSo.viewSale.call({from: accounts[1]});
		const uint256Z69XV4M = await UNIWHALE_ERC20SpaITSo.viewSale.call({from: accounts[3]});
		const boolcmpfnHs = await UNIWHALE_ERC20SpaITSo.tokenSale.call(addressS3uwsfI, {from: accounts[3]});
		const boolH72WQbM = await UNIWHALE_ERC20SpaITSo.tokenSale.call(addressgInuDDq, {from: accounts[1]});
		const booldtR9qxW = await UNIWHALE_ERC20SpaITSo.getAirdrop.call(addressAWrXf4z, {from: accounts[4]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20aqMj2Y2 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintju48xl0 = BigInt("1620")
		const uinteGALDZf = BigInt("1666")
		const uintAZhRWdc = BigInt("2009")
		const uintGSCTmrP = BigInt("601")
		const uint256j6HAxKs = await UNIWHALE_ERC20aqMj2Y2.startAirdrop.call(uintGSCTmrP, uintAZhRWdc, uinteGALDZf, uintju48xl0, {from: accounts[3]});
		const uint256mk3fG2 = await UNIWHALE_ERC20aqMj2Y2.viewAirdrop.call({from: accounts[2]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20aqMj2Y2 = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintzNNywZx = BigInt("1060")
		const uintZRf4wGp = BigInt("1406")
		const uintC6AAN38 = BigInt("539")
		const uintOB7RFDr = BigInt("889")
		const uintccZOsPH = BigInt("917")
		const uint256mk3fG2 = await UNIWHALE_ERC20aqMj2Y2.viewAirdrop.call({from: accounts[2]});
		const uint256Q5gi4xp = await UNIWHALE_ERC20aqMj2Y2.startSale.call(uintccZOsPH, uintOB7RFDr, uintC6AAN38, uintZRf4wGp, uintzNNywZx, {from: accounts[3]});
	});
})