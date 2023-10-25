const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressLhhmWvi = accounts[3]
		const Controllere98tDji = await Controller.new(addressLhhmWvi, {from: accounts[1]});
		const addressKeqMeA = accounts[0]
		const addressdlWXnr = accounts[0]
		const uintgrjNbjO = BigInt("374")
		const addressFVnCgcW = accounts[0]
		const uintb2dSs7E = BigInt("1324")
		const addressRHlZNRy = accounts[4]
		const addressoSSfhV2 = await Controllere98tDji.revokeStrategy.call(addressdlWXnr, addressKeqMeA, {from: accounts[2]});
		const addressAiCFyZe = await Controllere98tDji.earn.call(addressFVnCgcW, uintgrjNbjO, {from: accounts[4]});
		const addressSLrYpSW = await Controllere98tDji.inCaseTokensGetStuck.call(addressRHlZNRy, uintb2dSs7E, {from: accounts[0]});

		await expect(Controllere98tDji.revokeStrategy.call(addressdlWXnr, addressKeqMeA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXLqxLCN = accounts[4]
		const Controller0tX5eh = await Controller.new(addressXLqxLCN, {from: accounts[1]});
		const uintuKYjqE = BigInt("1871")
		const addressdhS2qS = accounts[4]
		const addressaKzcc7B = accounts[0]
		const addressdesRv1w = accounts[3]
		const addressRbNtm0b = accounts[3]
		const addressn4wZ9ml = accounts[0]
		const uintg0Q1Rx = await Controller0tX5eh.getExpectedReturn.call(addressaKzcc7B, addressdhS2qS, uintuKYjqE, {from: accounts[2]});
		const addressU31kAT = await Controller0tX5eh.inCaseStrategyTokenGetStuck.call(addressRbNtm0b, addressdesRv1w, {from: accounts[2]});
		const addressuZjpxYQ = await Controller0tX5eh.withdrawAll.call(addressn4wZ9ml, {from: accounts[1]});

		await expect(Controller0tX5eh.getExpectedReturn.call(addressaKzcc7B, addressdhS2qS, uintuKYjqE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressp5KMObY = accounts[0]
		const ControllerzatIGP5 = await Controller.new(addressp5KMObY, {from: accounts[0]});
		const uintOQa4BYz = BigInt("392")
		const addressynkeml5 = "0x0000000000000000000000000000000000000001"
		const addressmwzv0Z8 = accounts[4]
		const addressMmPvIYA = accounts[0]
		const addressK9bzii3 = accounts[2]
		const uintDcAkNG8 = BigInt("139")
		const addressENYjxjf = accounts[5]
		const uintouwtTHN = BigInt("1301")
		const addressqisIPod = accounts[0]
		const addressLdq7XYC = await ControllerzatIGP5.withdraw.call(addressynkeml5, uintOQa4BYz, {from: accounts[2]});
		const addressNUE81x = await ControllerzatIGP5.withdrawAll.call(addressmwzv0Z8, {from: accounts[3]});
		const addressZh6BPst = await ControllerzatIGP5.inCaseStrategyTokenGetStuck.call(addressK9bzii3, addressMmPvIYA, {from: accounts[4]});
		const addressMmhY5x = await ControllerzatIGP5.inCaseTokensGetStuck.call(addressENYjxjf, uintDcAkNG8, {from: accounts[0]});
		const addressWeLggsM = await ControllerzatIGP5.earn.call(addressqisIPod, uintouwtTHN, {from: accounts[0]});

		await expect(ControllerzatIGP5.withdraw.call(addressynkeml5, uintOQa4BYz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshsFvXI2 = "0x0000000000000000000000000000000000000001"
		const ControllervnduT9x = await Controller.new(addresshsFvXI2, {from: "0x0000000000000000000000000000000000000001"});
		const addressMHUXOh3 = accounts[5]
		const addressF3wvJqe = accounts[0]
		const addresszWrHaGR = accounts[1]
		const addressqwg6Va5 = accounts[2]
		const addressEPnhf51 = accounts[4]
		const uintyvB8JZr = BigInt("1766")
		const addressUM9H1eK = accounts[3]
		const addressPcDTnx6 = accounts[2]
		const addressB3sNjZU = accounts[4]
		const addressWggBSRD = accounts[1]
		const addressdmlL9Xo = await ControllervnduT9x.setOneSplit.call(addressMHUXOh3, {from: accounts[1]});
		const addressYkmNeXu = await ControllervnduT9x.withdrawAll.call(addressF3wvJqe, {from: accounts[1]});
		const addressNLExjq = await ControllervnduT9x.setRewards.call(addresszWrHaGR, {from: accounts[2]});
		const addresszWyv2gD = await ControllervnduT9x.inCaseStrategyTokenGetStuck.call(addressEPnhf51, addressqwg6Va5, {from: accounts[0]});
		const addresshh5Cg7S = await ControllervnduT9x.earn.call(addressUM9H1eK, uintyvB8JZr, {from: accounts[2]});
		const addressSwp9Sho = await ControllervnduT9x.setConverter.call(addressWggBSRD, addressB3sNjZU, addressPcDTnx6, {from: accounts[3]});
	});

	it('test for Controller', async () => {
		const address9vWz8c = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(address9vWz8c, {from: accounts[4]});
		const addressi5u9PXV = accounts[4]
		const address4oeZ7H = accounts[1]
		const addressQ9M3lhn = await ControllerYzfbpbv.setGovernance.call(addressi5u9PXV, {from: accounts[1]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(address4oeZ7H, {from: accounts[2]});

		await expect(ControllerYzfbpbv.setGovernance.call(addressi5u9PXV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUqB822 = accounts[4]
		const ControllerVydK9Ro = await Controller.new(addressUqB822, {from: accounts[1]});
		const uintBwpTgfx = BigInt("908")
		const addressp3SwWsl = accounts[0]
		const addresskeTCi42 = accounts[2]
		const addresslLeAZA = accounts[0]
		const addressOwtuQZL = accounts[1]
		const address8LpNsv = "0x0000000000000000000000000000000000000001"
		const addressPxTebZr = await ControllerVydK9Ro.inCaseTokensGetStuck.call(addressp3SwWsl, uintBwpTgfx, {from: accounts[0]});
		const addressvpDWp1g = await ControllerVydK9Ro.withdrawAll.call(addresskeTCi42, {from: "0x0000000000000000000000000000000000000001"});
		const addressGCrKQxR = await ControllerVydK9Ro.setStrategist.call(addresslLeAZA, {from: accounts[4]});
		const addressLESo3Xr = await ControllerVydK9Ro.inCaseStrategyTokenGetStuck.call(address8LpNsv, addressOwtuQZL, {from: accounts[0]});

		await expect(ControllerVydK9Ro.inCaseTokensGetStuck.call(addressp3SwWsl, uintBwpTgfx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqSnmu52 = accounts[0]
		const ControllerxAqXlkc = await Controller.new(addressqSnmu52, {from: accounts[2]});
		const addressLxF84Y = accounts[4]
		const addressN5WAtM5 = accounts[5]
		const addressYq2Zbkk = accounts[2]
		const addresscKAMU4m = accounts[4]
		const addressK38kCDj = accounts[0]
		const addressxCVLx2u = accounts[0]
		const addressfEz9Vua = accounts[4]
		const address3AGbyf = await ControllerxAqXlkc.approveStrategy.call(addressN5WAtM5, addressLxF84Y, {from: accounts[5]});
		const addressy3c3bN = await ControllerxAqXlkc.setStrategist.call(addressYq2Zbkk, {from: accounts[1]});
		const addressJ5OPm8G = await ControllerxAqXlkc.setConverter.call(addressxCVLx2u, addressK38kCDj, addresscKAMU4m, {from: accounts[2]});
		const addressvy4h4MH = await ControllerxAqXlkc.setGovernance.call(addressfEz9Vua, {from: accounts[2]});

		await expect(ControllerxAqXlkc.approveStrategy.call(addressN5WAtM5, addressLxF84Y, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVyhaNYe = accounts[2]
		const Controllerc5GDIrn = await Controller.new(addressVyhaNYe, {from: accounts[1]});
		const uintRPCe0wE = BigInt("1132")
		const addressclyfOH = accounts[0]
		const addressIjcXTYH = accounts[4]
		const addressHG028ou = accounts[2]
		const addressMVGb8vy = accounts[1]
		const addressHuC8jOc = accounts[2]
		const addressyDRwfzW = accounts[2]
		const uintPMdp5gu = await Controllerc5GDIrn.setSplit.call(uintRPCe0wE, {from: "0x0000000000000000000000000000000000000001"});
		const addressY5Ho3EZ = await Controllerc5GDIrn.setConverter.call(addressHG028ou, addressIjcXTYH, addressclyfOH, {from: accounts[0]});
		const addresswyMfM4A = await Controllerc5GDIrn.setVault.call(addressHuC8jOc, addressMVGb8vy, {from: "0x0000000000000000000000000000000000000001"});
		const addressUb4xtzq = await Controllerc5GDIrn.setRewards.call(addressyDRwfzW, {from: accounts[4]});

		await expect(Controllerc5GDIrn.setSplit.call(uintRPCe0wE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXU0kPZd = accounts[3]
		const ControllerhXh86hS = await Controller.new(addressXU0kPZd, {from: accounts[1]});
		const uintHmxuAwn = BigInt("1775")
		const addressFdGIerc = accounts[1]
		const addressCajuOVC = accounts[0]
		const addressyikM1cT = accounts[3]
		const uintb39SEuE = BigInt("1380")
		const addressXzafBp7 = accounts[4]
		const addressrG4jvca = accounts[3]
		const uintIJnMXEY = BigInt("949")
		const addressQNgUVem = accounts[0]
		const addressEVyg8E = accounts[3]
		const addressj2Q5WBo = await ControllerhXh86hS.earn.call(addressFdGIerc, uintHmxuAwn, {from: "0x0000000000000000000000000000000000000001"});
		const addressmmOMNJh = await ControllerhXh86hS.setStrategist.call(addressCajuOVC, {from: accounts[4]});
		const uintvjuUFVG = await ControllerhXh86hS.balanceOf.call(addressyikM1cT, {from: accounts[0]});
		const uintOcPwagw = await ControllerhXh86hS.getExpectedReturn.call(addressrG4jvca, addressXzafBp7, uintb39SEuE, {from: accounts[0]});
		const addressUGiK8P = await ControllerhXh86hS.yearn.call(addressEVyg8E, addressQNgUVem, uintIJnMXEY, {from: accounts[0]});

		await expect(ControllerhXh86hS.earn.call(addressFdGIerc, uintHmxuAwn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyKLL2I7 = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addressyKLL2I7, {from: accounts[4]});
		const addressP07sZJF = accounts[1]
		const addressGXvTxHQ = "0x0000000000000000000000000000000000000001"
		const addressmHFcPm0 = accounts[3]
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addressP07sZJF, {from: accounts[2]});
		const addressABHCjCa = await ControllerYzfbpbv.inCaseStrategyTokenGetStuck.call(addressmHFcPm0, addressGXvTxHQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerYzfbpbv.withdrawAll.call(addressP07sZJF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresso4LE5zS = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addresso4LE5zS, {from: accounts[4]});
		const addressBLPAMTO = accounts[4]
		const addressbJH9su = accounts[2]
		const addressyA7k6VJ = accounts[2]
		const addresslS4dx09 = await ControllerYzfbpbv.setVault.call(addressbJH9su, addressBLPAMTO, {from: accounts[1]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addressyA7k6VJ, {from: accounts[2]});

		await expect(ControllerYzfbpbv.setVault.call(addressbJH9su, addressBLPAMTO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyl59x77 = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addressyl59x77, {from: accounts[4]});
		const addressxGvDJdM = accounts[0]
		const addresswgI3eaO = accounts[2]
		const uintWNS5tXd = BigInt("763")
		const addressQ1vJPZm = accounts[3]
		const addressKkf8fK = accounts[3]
		const addressoQkCDt6 = accounts[3]
		const addressF9kHNaf = await ControllerYzfbpbv.setStrategy.call(addresswgI3eaO, addressxGvDJdM, {from: accounts[0]});
		const addressgKj8Pkq = await ControllerYzfbpbv.yearn.call(addressKkf8fK, addressQ1vJPZm, uintWNS5tXd, {from: accounts[2]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addressoQkCDt6, {from: accounts[2]});

		await expect(ControllerYzfbpbv.setStrategy.call(addresswgI3eaO, addressxGvDJdM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjS0P5V = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addressjS0P5V, {from: accounts[4]});
		const addressZi54viH = accounts[0]
		const addressRUhmfjB = accounts[1]
		const addressgNEJBgx = accounts[2]
		const uintUZ43lsu = BigInt("401")
		const addressFLojgL = accounts[0]
		const addressGQ5rIA = accounts[2]
		const addressm0cYjst = await ControllerYzfbpbv.setStrategy.call(addressRUhmfjB, addressZi54viH, {from: accounts[4]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addressgNEJBgx, {from: accounts[2]});
		const addressBQyuigH = await ControllerYzfbpbv.yearn.call(addressGQ5rIA, addressFLojgL, uintUZ43lsu, {from: accounts[0]});

		await expect(ControllerYzfbpbv.setStrategy.call(addressRUhmfjB, addressZi54viH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressNcKPezf = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addressNcKPezf, {from: accounts[4]});
		const addressCV1atT = accounts[5]
		const addressA5kMEDC = accounts[3]
		const addresscFgBRRz = accounts[2]
		const addressvdPK1h = await ControllerYzfbpbv.inCaseStrategyTokenGetStuck.call(addressA5kMEDC, addressCV1atT, {from: accounts[4]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addresscFgBRRz, {from: accounts[2]});

		await expect(ControllerYzfbpbv.inCaseStrategyTokenGetStuck.call(addressA5kMEDC, addressCV1atT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressg2eufMd = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addressg2eufMd, {from: accounts[4]});
		const addressK9yDCvl = accounts[0]
		const addressNWpTdq1 = accounts[2]
		const addressNbuPuz = accounts[4]
		const addressF4M9Q9Q = await ControllerYzfbpbv.setRewards.call(addressK9yDCvl, {from: accounts[2]});
		const addressi5uC1WW = await ControllerYzfbpbv.setGovernance.call(addressNWpTdq1, {from: accounts[4]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addressNbuPuz, {from: accounts[2]});

		await expect(ControllerYzfbpbv.setRewards.call(addressK9yDCvl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszzWJKNL = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addresszzWJKNL, {from: accounts[4]});
		const addressXOrLBe8 = accounts[4]
		const addressQiFCwb = accounts[4]
		const addressiBfvWzZ = accounts[1]
		const addressLq56gHr = accounts[2]
		const uintX978BMt = await ControllerYzfbpbv.balanceOf.call(addressXOrLBe8, {from: accounts[5]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addressQiFCwb, {from: accounts[2]});
		const addressLRrteiG = await ControllerYzfbpbv.inCaseStrategyTokenGetStuck.call(addressLq56gHr, addressiBfvWzZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerYzfbpbv.balanceOf.call(addressXOrLBe8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssqdwsEN = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addresssqdwsEN, {from: accounts[4]});
		const addresszUrzPAQ = accounts[4]
		const addressLvin4Pi = accounts[2]
		const addresshOfHJqd = accounts[0]
		const addressP3TSalx = accounts[4]
		const addressLPmQdnY = accounts[0]
		const addressr0zW8HY = accounts[0]
		const addressVinJtfM = await ControllerYzfbpbv.setConverter.call(addresshOfHJqd, addressLvin4Pi, addresszUrzPAQ, {from: accounts[0]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addressP3TSalx, {from: accounts[2]});
		const uintVdyINVw = await ControllerYzfbpbv.balanceOf.call(addressLPmQdnY, {from: accounts[1]});
		const uint97BhmE = await ControllerYzfbpbv.balanceOf.call(addressr0zW8HY, {from: accounts[1]});

		await expect(ControllerYzfbpbv.setConverter.call(addresshOfHJqd, addressLvin4Pi, addresszUrzPAQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressChbMbUO = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addressChbMbUO, {from: accounts[4]});
		const addresssrVrrqX = accounts[2]
		const addressKafdDTA = accounts[3]
		const addressZ0Brha6 = await ControllerYzfbpbv.setOneSplit.call(addresssrVrrqX, {from: accounts[1]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addressKafdDTA, {from: accounts[2]});

		await expect(ControllerYzfbpbv.setOneSplit.call(addresssrVrrqX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfLjiDLK = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addressfLjiDLK, {from: accounts[4]});
		const addressFtcGiZ2 = accounts[2]
		const addresswq7ZuXw = accounts[4]
		const addressFMghLfy = await ControllerYzfbpbv.setStrategist.call(addressFtcGiZ2, {from: accounts[4]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addresswq7ZuXw, {from: accounts[2]});

		await expect(ControllerYzfbpbv.withdrawAll.call(addresswq7ZuXw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressas6DYrJ = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addressas6DYrJ, {from: accounts[4]});
		const uintgRtVcX = BigInt("865")
		const addressBTvPfuC = accounts[0]
		const addressNXbPQ3j = accounts[1]
		const addressjmEENJl = accounts[0]
		const addresshkTyYyB = accounts[3]
		const addressj0yC6h = accounts[4]
		const addressUJjymPr = await ControllerYzfbpbv.yearn.call(addressNXbPQ3j, addressBTvPfuC, uintgRtVcX, {from: accounts[2]});
		const addressZISTN4f = await ControllerYzfbpbv.setStrategy.call(addresshkTyYyB, addressjmEENJl, {from: accounts[2]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addressj0yC6h, {from: accounts[2]});

		await expect(ControllerYzfbpbv.yearn.call(addressNXbPQ3j, addressBTvPfuC, uintgRtVcX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressT3ZosQe = "0x0000000000000000000000000000000000000001"
		const ControllerYzfbpbv = await Controller.new(addressT3ZosQe, {from: accounts[4]});
		const uintbUqRvwZ = BigInt("1757")
		const addressHqZbwA9 = accounts[1]
		const addressybdqXtD = accounts[4]
		const addressMTWGjqj = await ControllerYzfbpbv.inCaseTokensGetStuck.call(addressHqZbwA9, uintbUqRvwZ, {from: accounts[4]});
		const addressgCJJf1B = await ControllerYzfbpbv.withdrawAll.call(addressybdqXtD, {from: accounts[2]});

		await expect(ControllerYzfbpbv.inCaseTokensGetStuck.call(addressHqZbwA9, uintbUqRvwZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})