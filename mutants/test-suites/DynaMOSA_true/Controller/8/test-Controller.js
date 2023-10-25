const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressh8kGHb6 = "0x0000000000000000000000000000000000000001"
		const ControllerOXrohMz = await Controller.new(addressh8kGHb6, {from: accounts[4]});
		const uintv65NlG0 = BigInt("890")
		const addressScEyrIk = accounts[2]
		const addressPVqkV7v = accounts[3]
		const addressBWH1EUI = accounts[0]
		const addressl9ECvCb = accounts[4]
		const addressLZbu4TG = accounts[1]
		const addresszLK2RcY = accounts[4]
//		const addressZP9RQiV = await ControllerOXrohMz.inCaseTokensGetStuck.call(addressScEyrIk, uintv65NlG0, {from: "0x0000000000000000000000000000000000000001"});
//		const addresssVZtIDm = await ControllerOXrohMz.setOneSplit.call(addressPVqkV7v, {from: accounts[3]});
//		const addressYEZ9aJB = await ControllerOXrohMz.setVault.call(addressl9ECvCb, addressBWH1EUI, {from: accounts[4]});
//		const addressR5cr5w5 = await ControllerOXrohMz.setStrategist.call(addressLZbu4TG, {from: accounts[4]});
//		const addressGssZOaY = await ControllerOXrohMz.withdrawAll.call(addresszLK2RcY, {from: accounts[0]});

		await expect(ControllerOXrohMz.inCaseTokensGetStuck.call(addressScEyrIk, uintv65NlG0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJM0FfOg = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressJM0FfOg, {from: accounts[4]});
		const addressm8CeG4B = accounts[3]
		const address1MP3iv = accounts[1]
		const addressvN4r75A = accounts[5]
		const addresslOZfjFz = accounts[3]
		const uintUmmLhFh = BigInt("251")
		const addressfgT9Brk = accounts[3]
//		const addressVdaojBE = await ControllerFkDeTFz.approveStrategy.call(address1MP3iv, addressm8CeG4B, {from: accounts[1]});
//		const addressJiZYYV2 = await ControllerFkDeTFz.setVault.call(addresslOZfjFz, addressvN4r75A, {from: accounts[2]});
//		const addressGAx6PM = await ControllerFkDeTFz.inCaseTokensGetStuck.call(addressfgT9Brk, uintUmmLhFh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerFkDeTFz.approveStrategy.call(address1MP3iv, addressm8CeG4B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskO5nW6 = accounts[3]
		const ControllerfyQxO0K = await Controller.new(addresskO5nW6, {from: "0x0000000000000000000000000000000000000001"});
		const addressHa9uNBl = accounts[4]
		const addressH3uB6vq = accounts[3]
		const addressztnNnyR = await ControllerfyQxO0K.withdrawAll.call(addressHa9uNBl, {from: accounts[2]});
		const addressbMmYEoN = await ControllerfyQxO0K.setStrategist.call(addressH3uB6vq, {from: accounts[2]});
	});

	it('test for Controller', async () => {
		const addressUQyfIf7 = accounts[1]
		const ControllerFPIofk3 = await Controller.new(addressUQyfIf7, {from: accounts[3]});
		const addressqIw9XVP = accounts[4]
		const addressZHMUbof = accounts[2]
		const addressWR1fukp = accounts[2]
		const addresss24XVHa = accounts[3]
		const addressSP4En7L = accounts[3]
		const addressnctTKr1 = accounts[2]
		const uinturnFs1 = BigInt("630")
		const addressePAHZjw = accounts[3]
		const address5ZqnMW = accounts[0]
		const addressbtJvh9P = accounts[0]
		const addresszDfjUc3 = accounts[4]
		const addressM5OikCf = accounts[0]
		const addressU5i8Dnp = accounts[2]
//		const addresscw9p58N = await ControllerFPIofk3.setConverter.call(addressWR1fukp, addressZHMUbof, addressqIw9XVP, {from: accounts[4]});
//		const addressy6Qzw5C = await ControllerFPIofk3.setConverter.call(addressnctTKr1, addressSP4En7L, addresss24XVHa, {from: accounts[2]});
//		const addressebT8CSC = await ControllerFPIofk3.inCaseTokensGetStuck.call(addressePAHZjw, uinturnFs1, {from: accounts[3]});
//		const addressHWBuq1Q = await ControllerFPIofk3.setVault.call(addressbtJvh9P, address5ZqnMW, {from: accounts[3]});
//		const addressLoxLA6a = await ControllerFPIofk3.setConverter.call(addressU5i8Dnp, addressM5OikCf, addresszDfjUc3, {from: accounts[4]});

		await expect(ControllerFPIofk3.setConverter.call(addressWR1fukp, addressZHMUbof, addressqIw9XVP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyp1gnrf = accounts[2]
		const ControllerMo7Vaxr = await Controller.new(addressyp1gnrf, {from: accounts[3]});
		const uintpt3hEyA = BigInt("75")
		const addressKtiq1NY = accounts[4]
		const addressNKOA8ot = accounts[0]
		const uintLt0DDLG = BigInt("692")
		const addresswrNaqpx = accounts[0]
		const addressaBctpi6 = accounts[5]
		const addressKBuSu87 = accounts[4]
		const addressRwRIKuO = "0x0000000000000000000000000000000000000001"
		const addresscvMSkHT = accounts[4]
		const addressKY2b4Bx = accounts[0]
		const addressbtBTTMb = accounts[4]
//		const addressUKQzTZ = await ControllerMo7Vaxr.yearn.call(addressNKOA8ot, addressKtiq1NY, uintpt3hEyA, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoof955o = await ControllerMo7Vaxr.inCaseTokensGetStuck.call(addresswrNaqpx, uintLt0DDLG, {from: accounts[1]});
//		const addressilyiG2a = await ControllerMo7Vaxr.approveStrategy.call(addressKBuSu87, addressaBctpi6, {from: accounts[3]});
//		const addressTZhLnuq = await ControllerMo7Vaxr.setStrategist.call(addressRwRIKuO, {from: accounts[5]});
//		const uintWMwKiz = await ControllerMo7Vaxr.balanceOf.call(addresscvMSkHT, {from: accounts[2]});
//		const addressjSgfMT = await ControllerMo7Vaxr.setStrategy.call(addressbtBTTMb, addressKY2b4Bx, {from: accounts[2]});

		await expect(ControllerMo7Vaxr.yearn.call(addressNKOA8ot, addressKtiq1NY, uintpt3hEyA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRItgvPi = accounts[4]
		const ControllerhePeeJL = await Controller.new(addressRItgvPi, {from: accounts[3]});
		const addressL7KCUeA = accounts[1]
		const addresstMHF3xv = accounts[4]
		const addresswxkKoya = accounts[2]
		const addressWFrWWTq = accounts[1]
		const uintfBsO26S = BigInt("860")
		const addresszy51UBO = accounts[2]
		const addressYQmDoA1 = accounts[0]
		const addressR7OLbMz = accounts[2]
		const addresspC6Lu6d = accounts[4]
//		const addressZj9qVH7 = await ControllerhePeeJL.setVault.call(addresstMHF3xv, addressL7KCUeA, {from: accounts[1]});
//		const addressbOEF1j7 = await ControllerhePeeJL.setGovernance.call(addresswxkKoya, {from: accounts[5]});
//		const addressVfn1AT4 = await ControllerhePeeJL.setOneSplit.call(addressWFrWWTq, {from: accounts[3]});
//		const uintr8SKi6r = await ControllerhePeeJL.getExpectedReturn.call(addressYQmDoA1, addresszy51UBO, uintfBsO26S, {from: accounts[0]});
//		const addresstfrRVO4 = await ControllerhePeeJL.approveStrategy.call(addresspC6Lu6d, addressR7OLbMz, {from: accounts[1]});

		await expect(ControllerhePeeJL.setVault.call(addresstMHF3xv, addressL7KCUeA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresso4FuX8 = accounts[5]
		const ControllerEtJC7VU = await Controller.new(addresso4FuX8, {from: accounts[5]});
		const uintsHavV8F = BigInt("278")
		const addressS81S6oD = accounts[0]
		const addressexecGQt = accounts[0]
		const uintwjjcAUT = BigInt("2041")
		const addresslrpxc4r = accounts[0]
		const addressY381suI = accounts[1]
		const addressLSCejCS = accounts[3]
		const addressYjhd7jw = accounts[4]
//		const uintbIabb9 = await ControllerEtJC7VU.getExpectedReturn.call(addressexecGQt, addressS81S6oD, uintsHavV8F, {from: accounts[0]});
//		const addressmjbu2ay = await ControllerEtJC7VU.inCaseTokensGetStuck.call(addresslrpxc4r, uintwjjcAUT, {from: accounts[2]});
//		const addresse8BMqCL = await ControllerEtJC7VU.approveStrategy.call(addressLSCejCS, addressY381suI, {from: accounts[2]});
//		const addressnwH99xZ = await ControllerEtJC7VU.withdrawAll.call(addressYjhd7jw, {from: accounts[0]});

		await expect(ControllerEtJC7VU.getExpectedReturn.call(addressexecGQt, addressS81S6oD, uintsHavV8F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresss9gx74r = accounts[4]
		const ControllerhePeeJL = await Controller.new(addresss9gx74r, {from: accounts[3]});
		const uintCXFfDg4 = BigInt("72")
		const addresshJntuWX = accounts[1]
		const addresskyrtaJ = accounts[4]
		const addressxqIte7m = accounts[1]
		const uint2aNPTY = BigInt("860")
		const addressmMQBTgW = accounts[3]
		const addressghinP0U = accounts[0]
		const addressCQ3Yg0V = accounts[2]
		const addresstPGK9qc = accounts[4]
//		const uintlRPSqzd = await ControllerhePeeJL.setSplit.call(uintCXFfDg4, {from: accounts[2]});
//		const addressZj9qVH7 = await ControllerhePeeJL.setVault.call(addresskyrtaJ, addresshJntuWX, {from: accounts[1]});
//		const addressVfn1AT4 = await ControllerhePeeJL.setOneSplit.call(addressxqIte7m, {from: accounts[3]});
//		const uintr8SKi6r = await ControllerhePeeJL.getExpectedReturn.call(addressghinP0U, addressmMQBTgW, uint2aNPTY, {from: accounts[0]});
//		const addresstfrRVO4 = await ControllerhePeeJL.approveStrategy.call(addresstPGK9qc, addressCQ3Yg0V, {from: accounts[1]});

		await expect(ControllerhePeeJL.setSplit.call(uintCXFfDg4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVa9I2AS = accounts[4]
		const Controllerj2Mnc3z = await Controller.new(addressVa9I2AS, {from: accounts[5]});
		const uint5m5l7u = BigInt("1387")
		const addressWqCowKF = accounts[0]
		const addressCtssTMh = accounts[2]
		const addresssvwulfD = accounts[1]
		const addressLbve21D = accounts[0]
		const addressKaraHOf = accounts[1]
		const addressVpOhEXQ = accounts[3]
		const addressVn6zKsP = accounts[3]
		const addressEzviCO3 = accounts[1]
		const uintyCYK46Q = BigInt("1162")
		const addresspzbgW1h = accounts[3]
		const addressjRL3lSx = accounts[4]
//		const addressmcoLWfq = await Controllerj2Mnc3z.earn.call(addressWqCowKF, uint5m5l7u, {from: accounts[1]});
//		const addressgCJCp1g = await Controllerj2Mnc3z.approveStrategy.call(addresssvwulfD, addressCtssTMh, {from: accounts[1]});
//		const addressyx39L5O = await Controllerj2Mnc3z.setConverter.call(addressVpOhEXQ, addressKaraHOf, addressLbve21D, {from: accounts[2]});
//		const addressGQbhKlT = await Controllerj2Mnc3z.approveStrategy.call(addressEzviCO3, addressVn6zKsP, {from: accounts[2]});
//		const addressOeTmq0s = await Controllerj2Mnc3z.yearn.call(addressjRL3lSx, addresspzbgW1h, uintyCYK46Q, {from: accounts[4]});

		await expect(Controllerj2Mnc3z.earn.call(addressWqCowKF, uint5m5l7u, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvQ385JT = accounts[1]
		const ControlleriDdZl3Q = await Controller.new(addressvQ385JT, {from: accounts[1]});
		const addressLcxb7Hn = accounts[2]
		const addressLQ6jeqy = accounts[4]
		const addressD3c8GJ0 = "0x0000000000000000000000000000000000000001"
		const addressbfSVcVD = accounts[0]
		const uintrJg1lPr = BigInt("1622")
		const addressveQukrj = accounts[4]
		const addresscKVnwy7 = accounts[0]
		const addressD5WfKpW = accounts[1]
		const uintgo6dJoy = BigInt("113")
		const addressX0wkGCj = accounts[0]
		const addresshJceEJy = accounts[3]
//		const addresswCNUcHe = await ControlleriDdZl3Q.withdrawAll.call(addressLcxb7Hn, {from: accounts[3]});
//		const addressVya904 = await ControlleriDdZl3Q.setConverter.call(addressbfSVcVD, addressD3c8GJ0, addressLQ6jeqy, {from: accounts[2]});
//		const uintR4uSIdx = await ControlleriDdZl3Q.setSplit.call(uintrJg1lPr, {from: accounts[5]});
//		const addressr695pgL = await ControlleriDdZl3Q.setStrategist.call(addressveQukrj, {from: accounts[0]});
//		const addressd1K0YUJ = await ControlleriDdZl3Q.approveStrategy.call(addressD5WfKpW, addresscKVnwy7, {from: accounts[2]});
//		const uintPxQZYwp = await ControlleriDdZl3Q.getExpectedReturn.call(addresshJceEJy, addressX0wkGCj, uintgo6dJoy, {from: accounts[4]});

		await expect(ControlleriDdZl3Q.withdrawAll.call(addressLcxb7Hn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressCRiFPex = accounts[1]
		const ControlleriDdZl3Q = await Controller.new(addressCRiFPex, {from: accounts[1]});
		const addressaNjrseF = accounts[3]
		const addressUjrniAD = accounts[4]
		const addressiJKl1mj = accounts[3]
		const addressHLKEk4h = accounts[0]
		const addressWVN9Ar = accounts[3]
		const uintE35v3FW = BigInt("113")
		const addressD2qEtU = accounts[1]
		const addressnaXhenN = accounts[3]
		const addresseeAvqlP = await ControlleriDdZl3Q.setRewards.call(addressaNjrseF, {from: accounts[1]});
//		const addressVya904 = await ControlleriDdZl3Q.setConverter.call(addressHLKEk4h, addressiJKl1mj, addressUjrniAD, {from: accounts[2]});
//		const addressr695pgL = await ControlleriDdZl3Q.setStrategist.call(addressWVN9Ar, {from: accounts[0]});
//		const uintPxQZYwp = await ControlleriDdZl3Q.getExpectedReturn.call(addressnaXhenN, addressD2qEtU, uintE35v3FW, {from: accounts[4]});

		await expect(ControlleriDdZl3Q.setConverter.call(addressHLKEk4h, addressiJKl1mj, addressUjrniAD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKJBYvpQ = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressKJBYvpQ, {from: accounts[4]});
		const addressifk6XVC = accounts[2]
		const addressVj9C1T1 = accounts[5]
		const addressZ9fAnUH = accounts[3]
		const uintWpvytiY = BigInt("144")
		const addressrkE4qEe = accounts[3]
		const addressrUWSy9i = accounts[4]
		const uintnQ7oiNo = BigInt("251")
		const addressoT0Qr0u = accounts[5]
//		const addresscwE9nCQ = await ControllerFkDeTFz.setStrategist.call(addressifk6XVC, {from: accounts[1]});
//		const addressJiZYYV2 = await ControllerFkDeTFz.setVault.call(addressZ9fAnUH, addressVj9C1T1, {from: accounts[2]});
//		const addressBjwz5yP = await ControllerFkDeTFz.yearn.call(addressrUWSy9i, addressrkE4qEe, uintWpvytiY, {from: accounts[1]});
//		const addressGAx6PM = await ControllerFkDeTFz.inCaseTokensGetStuck.call(addressoT0Qr0u, uintnQ7oiNo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerFkDeTFz.setStrategist.call(addressifk6XVC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressmIWWEbw = accounts[0]
		const Controllerp16rXdb = await Controller.new(addressmIWWEbw, {from: accounts[0]});
		const addressd5G0xcu = accounts[4]
		const uintnUAqn99 = BigInt("324")
		const addressy17Dgkd = accounts[4]
		const addressBBi77OD = accounts[1]
		const addressv6pReH = accounts[0]
		const addressQH1TNR = accounts[4]
		const uintmV5dsMZ = BigInt("1267")
		const addressgIgZDAl = accounts[2]
		const addressk7owIGH = await Controllerp16rXdb.setOneSplit.call(addressd5G0xcu, {from: accounts[0]});
//		const uintVS3C9K4 = await Controllerp16rXdb.setSplit.call(uintnUAqn99, {from: accounts[3]});
//		const addresswJyX0Ha = await Controllerp16rXdb.approveStrategy.call(addressBBi77OD, addressy17Dgkd, {from: accounts[4]});
//		const addressKwAdCH = await Controllerp16rXdb.revokeStrategy.call(addressQH1TNR, addressv6pReH, {from: accounts[3]});
//		const addressJS60b7W = await Controllerp16rXdb.earn.call(addressgIgZDAl, uintmV5dsMZ, {from: accounts[1]});

		await expect(Controllerp16rXdb.setSplit.call(uintnUAqn99, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMxaPqob = accounts[4]
		const ControllerhePeeJL = await Controller.new(addressMxaPqob, {from: accounts[3]});
		const addressIbcd1zm = accounts[0]
		const addressFYerBl3 = accounts[1]
		const uintgi0g2yc = BigInt("1689")
		const addresswomnOyI = accounts[0]
		const uintxpjCoJa = BigInt("435")
		const addressYsY2Xg8 = accounts[5]
		const addressjVWDZ82 = accounts[3]
		const uintqS94Jqd = BigInt("72")
		const uintVOondh = BigInt("287")
		const addressH7U6JRr = accounts[4]
		const uintkd38HHO = BigInt("897")
		const addresstxJvdD6 = "0x0000000000000000000000000000000000000001"
		const addresshfvywUq = "0x0000000000000000000000000000000000000001"
//		const addresscnRA0T6 = await ControllerhePeeJL.inCaseStrategyTokenGetStuck.call(addressFYerBl3, addressIbcd1zm, {from: accounts[0]});
//		const addressdriI3Ec = await ControllerhePeeJL.earn.call(addresswomnOyI, uintgi0g2yc, {from: accounts[5]});
//		const addressZ1d1waw = await ControllerhePeeJL.yearn.call(addressjVWDZ82, addressYsY2Xg8, uintxpjCoJa, {from: accounts[2]});
//		const uintlRPSqzd = await ControllerhePeeJL.setSplit.call(uintqS94Jqd, {from: accounts[2]});
//		const addressDDyTjoZ = await ControllerhePeeJL.earn.call(addressH7U6JRr, uintVOondh, {from: accounts[4]});
//		const uintr8SKi6r = await ControllerhePeeJL.getExpectedReturn.call(addresshfvywUq, addresstxJvdD6, uintkd38HHO, {from: accounts[0]});

		await expect(ControllerhePeeJL.inCaseStrategyTokenGetStuck.call(addressFYerBl3, addressIbcd1zm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressaANghg = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressaANghg, {from: accounts[4]});
		const addressFGP49mN = accounts[2]
		const addressMDRK42q = accounts[2]
		const uintH1OyNLo = BigInt("1507")
		const addressyQKFtRg = accounts[1]
		const uintFFyxVF = BigInt("251")
		const addressZrEoByX = accounts[3]
//		const addressUrNBkpg = await ControllerFkDeTFz.setStrategy.call(addressMDRK42q, addressFGP49mN, {from: accounts[2]});
//		const addressQNDxLYL = await ControllerFkDeTFz.inCaseTokensGetStuck.call(addressyQKFtRg, uintH1OyNLo, {from: accounts[2]});
//		const addressGAx6PM = await ControllerFkDeTFz.inCaseTokensGetStuck.call(addressZrEoByX, uintFFyxVF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerFkDeTFz.setStrategy.call(addressMDRK42q, addressFGP49mN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUdTD6I = accounts[4]
		const Controllerj2Mnc3z = await Controller.new(addressUdTD6I, {from: accounts[5]});
		const addressosp7WBd = accounts[3]
		const uintQQCV4P = BigInt("1379")
		const addressUrB8OK6 = "0x0000000000000000000000000000000000000001"
//		const addressdEmMuX = await Controllerj2Mnc3z.setGovernance.call(addressosp7WBd, {from: accounts[2]});
//		const addressmcoLWfq = await Controllerj2Mnc3z.earn.call(addressUrB8OK6, uintQQCV4P, {from: accounts[1]});

		await expect(Controllerj2Mnc3z.setGovernance.call(addressosp7WBd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressS3s6BUU = accounts[4]
		const Controllerj2Mnc3z = await Controller.new(addressS3s6BUU, {from: accounts[5]});
		const addressOazXCi = "0x0000000000000000000000000000000000000001"
		const uintwXKE3LE = BigInt("997")
		const addresssZu2O2m = accounts[0]
		const addressBoDDbfG = accounts[3]
		const addresswkZmcX0 = await Controllerj2Mnc3z.setGovernance.call(addressOazXCi, {from: accounts[5]});
//		const addressWxVgVS = await Controllerj2Mnc3z.earn.call(addresssZu2O2m, uintwXKE3LE, {from: accounts[0]});
//		const addressdEmMuX = await Controllerj2Mnc3z.setGovernance.call(addressBoDDbfG, {from: accounts[2]});

		await expect(Controllerj2Mnc3z.earn.call(addresssZu2O2m, uintwXKE3LE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTRT0Cck = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressTRT0Cck, {from: accounts[4]});
		const addressFScs2nU = accounts[2]
		const addressbqwwslC = accounts[3]
		const addressLHHOHND = accounts[2]
		const addressd4gPKgv = accounts[0]
//		const uintaih472z = await ControllerFkDeTFz.balanceOf.call(addressFScs2nU, {from: accounts[3]});
//		const addressUdHx51m = await ControllerFkDeTFz.setConverter.call(addressd4gPKgv, addressLHHOHND, addressbqwwslC, {from: accounts[3]});

		await expect(ControllerFkDeTFz.balanceOf.call(addressFScs2nU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshjOh9Z7 = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addresshjOh9Z7, {from: accounts[4]});
		const addressPpsbmue = "0x0000000000000000000000000000000000000001"
		const addresswqKNhFE = "0x0000000000000000000000000000000000000001"
		const addressytWvFD = accounts[2]
		const uintAynC9fZ = BigInt("1253")
		const addressGCmG5nR = accounts[3]
		const addressXtQuSG5 = accounts[4]
		const addressBy0LJZQ = accounts[1]
//		const addressoYnf29P = await ControllerFkDeTFz.revokeStrategy.call(addresswqKNhFE, addressPpsbmue, {from: accounts[1]});
//		const addresseTnfTu7 = await ControllerFkDeTFz.setGovernance.call(addressytWvFD, {from: accounts[5]});
//		const addresstqVVQ9H = await ControllerFkDeTFz.yearn.call(addressXtQuSG5, addressGCmG5nR, uintAynC9fZ, {from: accounts[5]});
//		const addressz6bpxYU = await ControllerFkDeTFz.setStrategist.call(addressBy0LJZQ, {from: accounts[1]});

		await expect(ControllerFkDeTFz.revokeStrategy.call(addresswqKNhFE, addressPpsbmue, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKZehUIW = accounts[4]
		const ControllerZTNWLse = await Controller.new(addressKZehUIW, {from: accounts[5]});
		const uintOOiTRRX = BigInt("1597")
		const addressK8QZZBv = accounts[1]
		const addressqH1A40o = accounts[0]
		const addressotRZ9yv = accounts[2]
		const addressKk2FWzx = accounts[2]
//		const addressEAWI5hj = await ControllerZTNWLse.withdraw.call(addressK8QZZBv, uintOOiTRRX, {from: accounts[0]});
//		const addressyrhvXMO = await ControllerZTNWLse.setGovernance.call(addressqH1A40o, {from: accounts[3]});
//		const addressDkYK0gS = await ControllerZTNWLse.revokeStrategy.call(addressKk2FWzx, addressotRZ9yv, {from: accounts[2]});

		await expect(ControllerZTNWLse.withdraw.call(addressK8QZZBv, uintOOiTRRX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressFeaICtP = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressFeaICtP, {from: accounts[4]});
		const addressnXuxItD = accounts[0]
		const addressbVOmeud = accounts[3]
		const addressEql8GlA = accounts[6]
		const addressjW4sc51 = accounts[3]
//		const addressmWh4NU7 = await ControllerFkDeTFz.setStrategy.call(addressbVOmeud, addressnXuxItD, {from: accounts[4]});
//		const addressJiZYYV2 = await ControllerFkDeTFz.setVault.call(addressjW4sc51, addressEql8GlA, {from: accounts[2]});

		await expect(ControllerFkDeTFz.setStrategy.call(addressbVOmeud, addressnXuxItD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressABVfc5r = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressABVfc5r, {from: accounts[4]});
		const addressYXoSUUj = accounts[2]
		const address9LwQow = accounts[0]
		const uintzZdFIEx = BigInt("1535")
		const addressnl02K4O = "0x0000000000000000000000000000000000000001"
		const addressUO9LD9w = accounts[1]
		const uintahHY4iC = BigInt("251")
		const addressqZSOuCN = accounts[2]
		const addressky2yGbo = await ControllerFkDeTFz.revokeStrategy.call(address9LwQow, addressYXoSUUj, {from: accounts[4]});
//		const addressuWXC35N = await ControllerFkDeTFz.yearn.call(addressUO9LD9w, addressnl02K4O, uintzZdFIEx, {from: accounts[3]});
//		const addressGAx6PM = await ControllerFkDeTFz.inCaseTokensGetStuck.call(addressqZSOuCN, uintahHY4iC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerFkDeTFz.yearn.call(addressUO9LD9w, addressnl02K4O, uintzZdFIEx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressj0qDDHD = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressj0qDDHD, {from: accounts[4]});
		const uintftYxMW = BigInt("1517")
		const addressCMOWs0j = "0x0000000000000000000000000000000000000001"
		const uintc6C6ekq = BigInt("1412")
		const addressATONUvj = accounts[3]
		const uintlfFl9nr = BigInt("251")
		const addressZTEk77b = accounts[2]
//		const addressyEvA5ot = await ControllerFkDeTFz.inCaseTokensGetStuck.call(addressCMOWs0j, uintftYxMW, {from: accounts[4]});
//		const addresskiaL9mZ = await ControllerFkDeTFz.earn.call(addressATONUvj, uintc6C6ekq, {from: accounts[0]});
//		const addressGAx6PM = await ControllerFkDeTFz.inCaseTokensGetStuck.call(addressZTEk77b, uintlfFl9nr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerFkDeTFz.inCaseTokensGetStuck.call(addressCMOWs0j, uintftYxMW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjTzMCpu = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressjTzMCpu, {from: accounts[4]});
		const addresssJfIxsY = accounts[2]
		const addressLgYc7Ly = accounts[3]
//		const addressMcWHQ03 = await ControllerFkDeTFz.inCaseStrategyTokenGetStuck.call(addressLgYc7Ly, addresssJfIxsY, {from: accounts[4]});

		await expect(ControllerFkDeTFz.inCaseStrategyTokenGetStuck.call(addressLgYc7Ly, addresssJfIxsY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressSrTf79p = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressSrTf79p, {from: accounts[4]});
		const addresslii9TlT = accounts[3]
		const addressJeQoq2Q = accounts[3]
		const addressicWSaVS = accounts[1]
		const addressS1LlKQY = accounts[4]
		const addressDlNPXK = accounts[2]
		const addressZwsQJXu = accounts[0]
		const addressXOtliky = await ControllerFkDeTFz.setStrategist.call(addresslii9TlT, {from: accounts[4]});
//		const addressH9rGQs7 = await ControllerFkDeTFz.setVault.call(addressicWSaVS, addressJeQoq2Q, {from: accounts[0]});
//		const addressUdHx51m = await ControllerFkDeTFz.setConverter.call(addressZwsQJXu, addressDlNPXK, addressS1LlKQY, {from: accounts[3]});

		await expect(ControllerFkDeTFz.setVault.call(addressicWSaVS, addressJeQoq2Q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMzG6P4 = accounts[4]
		const Controllerg0QbvjD = await Controller.new(addressMzG6P4, {from: accounts[3]});
		const uintiWN3xY = BigInt("270")
		const addressZbfdkv5 = accounts[5]
		const addresszkVmjLz = accounts[2]
		const uintNvdq5IQ = await Controllerg0QbvjD.setSplit.call(uintiWN3xY, {from: accounts[3]});
//		const addresstqckGco = await Controllerg0QbvjD.inCaseStrategyTokenGetStuck.call(addresszkVmjLz, addressZbfdkv5, {from: accounts[2]});

		await expect(Controllerg0QbvjD.inCaseStrategyTokenGetStuck.call(addresszkVmjLz, addressZbfdkv5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressm0onbYc = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressm0onbYc, {from: accounts[4]});
		const uintjIgn4Fc = BigInt("838")
		const addressygTYf20 = accounts[4]
		const addressJxwKL9m = "0x0000000000000000000000000000000000000001"
		const uintTGWx2wh = BigInt("1591")
		const addressdbD7Ri = accounts[3]
		const addressqmdtqpV = accounts[2]
		const address9UHLdd = accounts[0]
//		const addresstCF0K8I = await ControllerFkDeTFz.yearn.call(addressJxwKL9m, addressygTYf20, uintjIgn4Fc, {from: accounts[4]});
//		const uintmILgr5h = await ControllerFkDeTFz.setSplit.call(uintTGWx2wh, {from: accounts[0]});
//		const addressUdHx51m = await ControllerFkDeTFz.setConverter.call(address9UHLdd, addressqmdtqpV, addressdbD7Ri, {from: accounts[3]});

		await expect(ControllerFkDeTFz.yearn.call(addressJxwKL9m, addressygTYf20, uintjIgn4Fc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressFfJXVnC = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressFfJXVnC, {from: accounts[4]});
		const addressXT3RQUa = accounts[2]
		const addressZDhxXMI = "0x0000000000000000000000000000000000000001"
		const addresse11CZkW = accounts[4]
		const addressWQ0aTpU = accounts[5]
		const addressqUMPIjp = accounts[3]
//		const addressylFFE7t = await ControllerFkDeTFz.withdrawAll.call(addressXT3RQUa, {from: accounts[4]});
//		const addressmWh4NU7 = await ControllerFkDeTFz.setStrategy.call(addresse11CZkW, addressZDhxXMI, {from: accounts[4]});
//		const addressMlzVjSv = await ControllerFkDeTFz.approveStrategy.call(addressqUMPIjp, addressWQ0aTpU, {from: accounts[3]});

		await expect(ControllerFkDeTFz.withdrawAll.call(addressXT3RQUa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressimttOc3 = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressimttOc3, {from: accounts[4]});
		const addressjXLmswH = accounts[3]
		const addressweEVpp = "0x0000000000000000000000000000000000000001"
		const addresszUW5reo = accounts[3]
		const uintWG8DWd6 = BigInt("838")
		const addressipvkYXw = accounts[4]
		const address5yCtLP = "0x0000000000000000000000000000000000000002"
		const addressZaD6UOH = await ControllerFkDeTFz.setConverter.call(addresszUW5reo, addressweEVpp, addressjXLmswH, {from: accounts[4]});
//		const addresstCF0K8I = await ControllerFkDeTFz.yearn.call(address5yCtLP, addressipvkYXw, uintWG8DWd6, {from: accounts[4]});

		await expect(ControllerFkDeTFz.yearn.call(address5yCtLP, addressipvkYXw, uintWG8DWd6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskXTnQD = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addresskXTnQD, {from: accounts[4]});
		const addressZQ0bsq = "0x0000000000000000000000000000000000000001"
		const addressLkZ1TyI = accounts[2]
		const addressjLawxCi = accounts[3]
		const addressGN4DXxA = accounts[4]
		const addressODBBTfH = await ControllerFkDeTFz.approveStrategy.call(addressLkZ1TyI, addressZQ0bsq, {from: accounts[4]});
//		const addressVdaojBE = await ControllerFkDeTFz.approveStrategy.call(addressGN4DXxA, addressjLawxCi, {from: accounts[1]});

		await expect(ControllerFkDeTFz.approveStrategy.call(addressGN4DXxA, addressjLawxCi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressROqL7lz = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressROqL7lz, {from: accounts[4]});
		const addressUohEQvc = accounts[4]
		const addressMtFQouc = accounts[0]
		const addressTN7esKf = accounts[0]
		const addressoE59Ssk = accounts[1]
		const addresslWG1u4N = accounts[5]
		const addressPpYQcEm = accounts[4]
		const addressQeF2Dnp = "0x0000000000000000000000000000000000000001"
		const addressP9VdUrG = accounts[0]
		const addressuXMofVN = await ControllerFkDeTFz.approveStrategy.call(addressMtFQouc, addressUohEQvc, {from: accounts[4]});
		const addressj1lmHYz = await ControllerFkDeTFz.setVault.call(addressoE59Ssk, addressTN7esKf, {from: accounts[4]});
//		const addressJiZYYV2 = await ControllerFkDeTFz.setVault.call(addressPpYQcEm, addresslWG1u4N, {from: accounts[2]});
//		const addressO255Zke = await ControllerFkDeTFz.setStrategy.call(addressP9VdUrG, addressQeF2Dnp, {from: accounts[4]});

		await expect(ControllerFkDeTFz.setVault.call(addressPpYQcEm, addresslWG1u4N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgPxWknZ = "0x0000000000000000000000000000000000000001"
		const ControllerFkDeTFz = await Controller.new(addressgPxWknZ, {from: accounts[4]});
		const uintGF54J6i = BigInt("838")
		const addressb0lhRLW = accounts[5]
		const addressqBW06fC = "0x00000000000000000000000000000000000000-1"
		const addressdl4ITww = "0x0000000000000000000000000000000000000001"
		const addresspdaWc08 = accounts[5]
		const addressFK9w2mY = "0x0000000000000000000000000000000000000001"
		const addressJ10cTq4 = accounts[2]
//		const addresstCF0K8I = await ControllerFkDeTFz.yearn.call(addressqBW06fC, addressb0lhRLW, uintGF54J6i, {from: accounts[4]});
//		const addressd6yXaOr = await ControllerFkDeTFz.setStrategist.call(addressdl4ITww, {from: accounts[2]});
//		const addressVYEo2cq = await ControllerFkDeTFz.withdrawAll.call(addresspdaWc08, {from: accounts[3]});
//		const addressE2qqmLf = await ControllerFkDeTFz.revokeStrategy.call(addressJ10cTq4, addressFK9w2mY, {from: accounts[4]});

		await expect(ControllerFkDeTFz.yearn.call(addressqBW06fC, addressb0lhRLW, uintGF54J6i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})