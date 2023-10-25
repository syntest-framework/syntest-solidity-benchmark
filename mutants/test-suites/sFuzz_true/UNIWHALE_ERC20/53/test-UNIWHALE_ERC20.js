const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20hEgwRw = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addressW7iKKP = accounts[0]
		const addressHggxG51 = accounts[0]
		const uintmOCaPB5 = BigInt("151")
		const uinthgMKKlq = BigInt("806")
		const uintnqdA1k = BigInt("1548")
		const uintO1oXd2D = BigInt("458")
		const uintWBrGIHp = BigInt("648")
		const uintQ0lL7Ib = BigInt("553")
		const uintRTXFGK7 = BigInt("1413")
		const uintZCRIqh9 = BigInt("1533")
		const uintRypN5eU = BigInt("1474")
		const uint256v0HL2y0 = await UNIWHALE_ERC20hEgwRw.viewAirdrop.call({from: accounts[0]});
//		const boolewuMr7F = await UNIWHALE_ERC20hEgwRw.tokenSale.call(addressW7iKKP, {from: accounts[1]});
//		const boolcGpIkkk = await UNIWHALE_ERC20hEgwRw.tokenSale.call(addressHggxG51, {from: accounts[2]});
//		const uint256wMIxPV = await UNIWHALE_ERC20hEgwRw.startAirdrop.call(uintO1oXd2D, uintnqdA1k, uinthgMKKlq, uintmOCaPB5, {from: accounts[2]});
//		const uint256Ocbl1As = await UNIWHALE_ERC20hEgwRw.startSale.call(uintRypN5eU, uintZCRIqh9, uintRTXFGK7, uintQ0lL7Ib, uintWBrGIHp, {from: accounts[0]});

		await expect(UNIWHALE_ERC20hEgwRw.tokenSale.call(addressW7iKKP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20cA2eIk = await UNIWHALE_ERC20.new({from: accounts[2]});
		const uinttROnmyH = BigInt("328")
		const uintLVSSCzV = BigInt("738")
		const uintcts0DUz = BigInt("944")
		const uintl1c1rpu = BigInt("1107")
		const uintBVuY1qv = BigInt("1337")
		const uintNNJsSTu = BigInt("1040")
		const uintZn2d079 = BigInt("1201")
		const uintmcQAdz = BigInt("1960")
		const addressOMTug3C = accounts[4]
		const uint256uRzMJ3f = await UNIWHALE_ERC20cA2eIk.viewSale.call({from: accounts[1]});
		const uint256ufLBUtS = await UNIWHALE_ERC20cA2eIk.startAirdrop.call(uintl1c1rpu, uintcts0DUz, uintLVSSCzV, uinttROnmyH, {from: accounts[2]});
//		const uint256U70uCqk = await UNIWHALE_ERC20cA2eIk.startAirdrop.call(uintmcQAdz, uintZn2d079, uintNNJsSTu, uintBVuY1qv, {from: accounts[4]});
//		const boolXRJtAJI = await UNIWHALE_ERC20cA2eIk.getAirdrop.call(addressOMTug3C, {from: accounts[1]});
//		const uint256FykIfUi = await UNIWHALE_ERC20cA2eIk.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20cA2eIk.startAirdrop.call(uintmcQAdz, uintZn2d079, uintNNJsSTu, uintBVuY1qv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20LVwnBBo = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addresss5MVAp = accounts[3]
		const addressF63Mtc = accounts[3]
		const addressB7Fr3P = accounts[5]
		const addresscKAmchB = accounts[5]
		const boolAjGB761 = await UNIWHALE_ERC20LVwnBBo.tokenSale.call(addresss5MVAp, {from: accounts[1]});
		const boolrokZ5MU = await UNIWHALE_ERC20LVwnBBo.tokenSale.call(addressF63Mtc, {from: accounts[1]});
		const boolELqKag5 = await UNIWHALE_ERC20LVwnBBo.getAirdrop.call(addressB7Fr3P, {from: accounts[4]});
		const uint256ekMsGNY = await UNIWHALE_ERC20LVwnBBo.viewSale.call({from: accounts[0]});
		const boolCXZE1W = await UNIWHALE_ERC20LVwnBBo.tokenSale.call(addresscKAmchB, {from: accounts[5]});
		await UNIWHALE_ERC20LVwnBBo.clearETH.call({from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20EnpOhB1 = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addressy7TzvbR = accounts[5]
		const uint4XuvIV = BigInt("1441")
		const uintS7EYxYh = BigInt("1097")
		const uintQTAcgY = BigInt("714")
		const uintF2X7nRQ = BigInt("1422")
		const uintbDb7rRK = BigInt("39")
		const addresss67bdWC = accounts[4]
		const uintLufLNB2 = BigInt("1422")
		const uintMHSWxKw = BigInt("945")
		const uintXDwz62a = BigInt("224")
		const uintH7TgFaE = BigInt("1575")
		const uintbEpkFnG = BigInt("1071")
		const uintGLb6d5P = BigInt("382")
		const uintqIqLkor = BigInt("500")
		const uintOvmK550 = BigInt("1405")
		const uintNPJPshM = BigInt("1891")
		const uintDWYRJqu = BigInt("1116")
		const uintfQd9C4k = BigInt("1056")
		const uintuCf9bAp = BigInt("862")
		const uintLn7QYVY = BigInt("1640")
		const addresssDwGtBh = accounts[3]
//		const boolUv0g9Ko = await UNIWHALE_ERC20EnpOhB1.getAirdrop.call(addressy7TzvbR, {from: accounts[0]});
//		const uint256sDmrXqu = await UNIWHALE_ERC20EnpOhB1.startSale.call(uintbDb7rRK, uintF2X7nRQ, uintQTAcgY, uintS7EYxYh, uint4XuvIV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRJjQyOt = await UNIWHALE_ERC20EnpOhB1.tokenSale.call(addresss67bdWC, {from: accounts[3]});
//		const uint256eWRfrNw = await UNIWHALE_ERC20EnpOhB1.startAirdrop.call(uintH7TgFaE, uintXDwz62a, uintMHSWxKw, uintLufLNB2, {from: accounts[4]});
//		const uint256HOZGy63 = await UNIWHALE_ERC20EnpOhB1.startAirdrop.call(uintOvmK550, uintqIqLkor, uintGLb6d5P, uintbEpkFnG, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256jdfUxSH = await UNIWHALE_ERC20EnpOhB1.startSale.call(uintLn7QYVY, uintuCf9bAp, uintfQd9C4k, uintDWYRJqu, uintNPJPshM, {from: accounts[0]});
//		const booldEvfoGZ = await UNIWHALE_ERC20EnpOhB1.tokenSale.call(addresssDwGtBh, {from: accounts[4]});

		await expect(UNIWHALE_ERC20EnpOhB1.getAirdrop.call(addressy7TzvbR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20EnpOhB1 = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintpxpOYlE = BigInt("905")
		const uinteIc7ERh = BigInt("1333")
		const uinth4ZAXlm = BigInt("567")
		const uinttk6oCkl = BigInt("849")
		const uintJcs6JT2 = BigInt("587")
		const uinty02NyPD = BigInt("1441")
		const uintyOOCp1w = BigInt("1097")
		const uintjI4G19b = BigInt("714")
		const uintVwVenow = BigInt("1422")
		const uintCEsBcHB = BigInt("39")
		const uint256XViYyDw = await UNIWHALE_ERC20EnpOhB1.viewSale.call({from: accounts[2]});
		const uint256OnI6tdC = await UNIWHALE_ERC20EnpOhB1.startSale.call(uintJcs6JT2, uinttk6oCkl, uinth4ZAXlm, uinteIc7ERh, uintpxpOYlE, {from: accounts[0]});
//		const uint256sDmrXqu = await UNIWHALE_ERC20EnpOhB1.startSale.call(uintCEsBcHB, uintVwVenow, uintjI4G19b, uintyOOCp1w, uinty02NyPD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20EnpOhB1.startSale.call(uintCEsBcHB, uintVwVenow, uintjI4G19b, uintyOOCp1w, uinty02NyPD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20EnpOhB1 = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintjD4ly5 = BigInt("1441")
		const uintrPwIqj1 = BigInt("1099")
		const uintLr9LFAo = BigInt("714")
		const uintvzVa3MX = BigInt("1422")
		const uintJctwC0c = BigInt("39")
		const uint256cdreel6 = await UNIWHALE_ERC20EnpOhB1.viewAirdrop.call({from: accounts[2]});
//		await UNIWHALE_ERC20EnpOhB1.clearETH.call({from: accounts[0]});
//		const uint256sDmrXqu = await UNIWHALE_ERC20EnpOhB1.startSale.call(uintJctwC0c, uintvzVa3MX, uintLr9LFAo, uintrPwIqj1, uintjD4ly5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256E6JaYJR = await UNIWHALE_ERC20EnpOhB1.viewSale.call({from: accounts[3]});

		await expect(UNIWHALE_ERC20EnpOhB1.clearETH.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})