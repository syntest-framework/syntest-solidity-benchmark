const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressYRNsUR = "0x0000000000000000000000000000000000000001"
		const ControllerrVwLpcn = await Controller.new(addressYRNsUR, {from: accounts[1]});
		const uintVesV6M = BigInt("712")
		const addressRDcvObn = "0x0000000000000000000000000000000000000001"
		const addressTt3E0C6 = accounts[2]
		const addressy9hF6cw = accounts[3]
		const addressmXIgwMz = await ControllerrVwLpcn.earn.call(addressRDcvObn, uintVesV6M, {from: accounts[3]});
		const addresss656IU9 = await ControllerrVwLpcn.setGovernance.call(addressTt3E0C6, {from: accounts[1]});
		const addressE8wmDOr = await ControllerrVwLpcn.withdrawAll.call(addressy9hF6cw, {from: accounts[3]});

		await expect(ControllerrVwLpcn.earn.call(addressRDcvObn, uintVesV6M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZxDC7ut = accounts[3]
		const ControllerXlpamju = await Controller.new(addressZxDC7ut, {from: accounts[2]});
		const addressN8Llp0S = accounts[1]
		const addressrq5qyE = accounts[0]
		const addresszH1A8L = accounts[4]
		const addressbShwCzJ = accounts[4]
		const uintxBCroOp = BigInt("2020")
		const addressU0UPUg = accounts[4]
		const addressPqtSvYW = await ControllerXlpamju.setGovernance.call(addressN8Llp0S, {from: accounts[4]});
		const uintLrB37Tv = await ControllerXlpamju.balanceOf.call(addressrq5qyE, {from: accounts[4]});
		const addressYayaKsi = await ControllerXlpamju.revokeStrategy.call(addressbShwCzJ, addresszH1A8L, {from: accounts[5]});
		const uintPcIOk0 = await ControllerXlpamju.setSplit.call(uintxBCroOp, {from: accounts[5]});
		const addressrnQPG63 = await ControllerXlpamju.setGovernance.call(addressU0UPUg, {from: accounts[4]});

		await expect(ControllerXlpamju.setGovernance.call(addressN8Llp0S, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgQxsiyT = accounts[4]
		const ControllerXIzhhq = await Controller.new(addressgQxsiyT, {from: accounts[2]});
		const addressL8EO6F = accounts[4]
		const addressOuKk9G0 = accounts[2]
		const addressevH7Sb = accounts[0]
		const addressR4OTjnY = accounts[4]
		const addressWccDhFL = accounts[2]
		const addressJIAl5Z = accounts[0]
		const addressIkGkCSX = await ControllerXIzhhq.setOneSplit.call(addressL8EO6F, {from: accounts[4]});
		const uintREHIdX = await ControllerXIzhhq.balanceOf.call(addressOuKk9G0, {from: accounts[0]});
		const addressAoeEMPN = await ControllerXIzhhq.setStrategy.call(addressR4OTjnY, addressevH7Sb, {from: accounts[3]});
		const addressJa9nXfv = await ControllerXIzhhq.setStrategist.call(addressWccDhFL, {from: accounts[2]});
		const uintpmUbvWJ = await ControllerXIzhhq.balanceOf.call(addressJIAl5Z, {from: accounts[4]});

		await expect(ControllerXIzhhq.setOneSplit.call(addressL8EO6F, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address0kCR6s = accounts[2]
		const ControllerQX82zV6 = await Controller.new(address0kCR6s, {from: accounts[3]});
		const addressTppTAyy = accounts[4]
		const addressALIxeT3 = accounts[3]
		const addressaN4dVXX = accounts[5]
		const addressLD9F2CQ = "0x0000000000000000000000000000000000000001"
		const addressMnmPEgX = "0x0000000000000000000000000000000000000001"
		const addressj2cZxh2 = accounts[2]
		const addresssJkIaKV = accounts[0]
		const addressp80rF3i = accounts[4]
		const addresskcNBKL1 = accounts[0]
		const addressFEZE3Te = await ControllerQX82zV6.revokeStrategy.call(addressALIxeT3, addressTppTAyy, {from: accounts[4]});
		const addressBbCh60V = await ControllerQX82zV6.setStrategy.call(addressLD9F2CQ, addressaN4dVXX, {from: accounts[3]});
		const addresshHMPdBM = await ControllerQX82zV6.setVault.call(addressj2cZxh2, addressMnmPEgX, {from: accounts[1]});
		const addressXhzJfxU = await ControllerQX82zV6.setConverter.call(addresskcNBKL1, addressp80rF3i, addresssJkIaKV, {from: accounts[4]});

		await expect(ControllerQX82zV6.revokeStrategy.call(addressALIxeT3, addressTppTAyy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressD5Zouvk = accounts[4]
		const ControllerpIZjX0L = await Controller.new(addressD5Zouvk, {from: "0x0000000000000000000000000000000000000001"});
		const addresso7YRGqc = accounts[4]
		const addressbRE2ZfY = accounts[0]
		const addressKIMgfR = accounts[2]
		const addressvgKbzti = await ControllerpIZjX0L.setRewards.call(addresso7YRGqc, {from: accounts[0]});
		const addressQ8XD4Z1 = await ControllerpIZjX0L.setVault.call(addressKIMgfR, addressbRE2ZfY, {from: accounts[4]});
	});

	it('test for Controller', async () => {
		const addressHrKXwyN = accounts[2]
		const ControllerAEhcLG = await Controller.new(addressHrKXwyN, {from: accounts[0]});
		const uint05uBr6 = BigInt("1735")
		const uintsoYfwot = BigInt("1877")
		const addressw7SQSUx = accounts[1]
		const address0rLdb1 = accounts[0]
		const uintDjsGzpk = BigInt("492")
		const addressyKRCEoW = accounts[5]
		const uintiZDlWhC = BigInt("744")
		const addressigsqXEe = accounts[5]
		const addressqv3QCwl = accounts[2]
		const addressoxOH5hs = accounts[3]
		const uinthCwpvy6 = await ControllerAEhcLG.setSplit.call(uint05uBr6, {from: accounts[1]});
		const uintLQDu8fp = await ControllerAEhcLG.getExpectedReturn.call(address0rLdb1, addressw7SQSUx, uintsoYfwot, {from: accounts[5]});
		const addressWg0MPAR = await ControllerAEhcLG.inCaseTokensGetStuck.call(addressyKRCEoW, uintDjsGzpk, {from: accounts[0]});
		const addressm4FcK1U = await ControllerAEhcLG.earn.call(addressigsqXEe, uintiZDlWhC, {from: accounts[3]});
		const addressCjuvZxl = await ControllerAEhcLG.approveStrategy.call(addressoxOH5hs, addressqv3QCwl, {from: accounts[5]});

		await expect(ControllerAEhcLG.setSplit.call(uint05uBr6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressctDKNc0 = accounts[0]
		const Controllern3zrgS1 = await Controller.new(addressctDKNc0, {from: accounts[5]});
		const addressQF48k1S = accounts[0]
		const addressT1cZl9K = accounts[4]
		const addressW3XD3q = accounts[1]
		const address884xpq = accounts[4]
		const addressemX6ZY5 = accounts[1]
		const addressqAWseB = await Controllern3zrgS1.setStrategy.call(addressT1cZl9K, addressQF48k1S, {from: accounts[4]});
		const uintra05RUv = await Controllern3zrgS1.balanceOf.call(addressW3XD3q, {from: accounts[3]});
		const addressSNlZttf = await Controllern3zrgS1.revokeStrategy.call(addressemX6ZY5, address884xpq, {from: accounts[2]});

		await expect(Controllern3zrgS1.setStrategy.call(addressT1cZl9K, addressQF48k1S, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBcclMY = accounts[1]
		const ControllerSGVci6s = await Controller.new(addressBcclMY, {from: accounts[3]});
		const addressMw4Czoj = accounts[4]
		const address4jx2cb = accounts[4]
		const addressgpRa5oh = accounts[3]
		const addressqmw5dPD = accounts[2]
		const addressKZ187RV = accounts[3]
		const addressfiJjXKa = accounts[0]
		const addressfLc7ymZ = accounts[0]
		const addressslL8pPq = accounts[2]
		const addresshXDR8tm = accounts[4]
		const addressRw0jrrC = await ControllerSGVci6s.setStrategist.call(addressMw4Czoj, {from: "0x0000000000000000000000000000000000000001"});
		const addressoNTOIN0 = await ControllerSGVci6s.setGovernance.call(address4jx2cb, {from: accounts[1]});
		const address97bzTW = await ControllerSGVci6s.setOneSplit.call(addressgpRa5oh, {from: accounts[3]});
		const addressHLIsDrK = await ControllerSGVci6s.setOneSplit.call(addressqmw5dPD, {from: "0x0000000000000000000000000000000000000001"});
		const addressNdvDEx = await ControllerSGVci6s.revokeStrategy.call(addressfiJjXKa, addressKZ187RV, {from: accounts[4]});
		const addressx88ssE = await ControllerSGVci6s.setConverter.call(addresshXDR8tm, addressslL8pPq, addressfLc7ymZ, {from: accounts[5]});

		await expect(ControllerSGVci6s.setStrategist.call(addressMw4Czoj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssi2N6Qy = accounts[0]
		const ControllerrDKS7CE = await Controller.new(addresssi2N6Qy, {from: accounts[1]});
		const uintDnzS23y = BigInt("1438")
		const addressDdQckz3 = accounts[5]
		const addressTKRRKiZ = accounts[0]
		const addressvuLgBTB = "0x0000000000000000000000000000000000000001"
		const uintvNwY7u = BigInt("1481")
		const addresswxHxdJR = accounts[4]
		const addressSzpZw1w = accounts[4]
		const addressvY3K5SI = await ControllerrDKS7CE.inCaseTokensGetStuck.call(addressDdQckz3, uintDnzS23y, {from: accounts[2]});
		const addressTbbqBu = await ControllerrDKS7CE.setStrategy.call(addressvuLgBTB, addressTKRRKiZ, {from: accounts[5]});
		const uintAOpOosV = await ControllerrDKS7CE.getExpectedReturn.call(addressSzpZw1w, addresswxHxdJR, uintvNwY7u, {from: accounts[2]});

		await expect(ControllerrDKS7CE.inCaseTokensGetStuck.call(addressDdQckz3, uintDnzS23y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbsnrmu = accounts[2]
		const ControllerQX82zV6 = await Controller.new(addressbsnrmu, {from: accounts[3]});
		const addressfuxAWmW = accounts[5]
		const addressJF18p9 = accounts[3]
		const addressCUdSfzV = "0x0000000000000000000000000000000000000001"
		const addressmcDeY2Z = accounts[2]
		const addressBbCh60V = await ControllerQX82zV6.setStrategy.call(addressJF18p9, addressfuxAWmW, {from: accounts[3]});
		const addresshHMPdBM = await ControllerQX82zV6.setVault.call(addressmcDeY2Z, addressCUdSfzV, {from: accounts[1]});

		await expect(ControllerQX82zV6.setStrategy.call(addressJF18p9, addressfuxAWmW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressn1SwYdf = accounts[2]
		const ControllerAEhcLG = await Controller.new(addressn1SwYdf, {from: accounts[0]});
		const uintbOomlMO = BigInt("1632")
		const addressW21KLSZ = accounts[2]
		const addressWKlWwj = accounts[0]
		const addresstSLiD5 = accounts[4]
		const addressTMtl8n = accounts[3]
		const addressXRHEEzQ = "0x0000000000000000000000000000000000000001"
		const uintoa71uG9 = BigInt("1712")
		const addressMnPZhgX = accounts[2]
		const addressUwhhsd = accounts[3]
		const addresso3jrLLK = accounts[4]
		const addressiGZDWqR = accounts[5]
		const addressgJOi9X = accounts[3]
		const uintRDdDHlC = await ControllerAEhcLG.getExpectedReturn.call(addressWKlWwj, addressW21KLSZ, uintbOomlMO, {from: accounts[1]});
		const addressOUnOG5 = await ControllerAEhcLG.setConverter.call(addressXRHEEzQ, addressTMtl8n, addresstSLiD5, {from: "0x0000000000000000000000000000000000000001"});
		const uinthCwpvy6 = await ControllerAEhcLG.setSplit.call(uintoa71uG9, {from: accounts[1]});
		const addressCjuvZxl = await ControllerAEhcLG.approveStrategy.call(addressUwhhsd, addressMnPZhgX, {from: accounts[5]});
		const addressxM0XjmP = await ControllerAEhcLG.setConverter.call(addressgJOi9X, addressiGZDWqR, addresso3jrLLK, {from: accounts[2]});

		await expect(ControllerAEhcLG.getExpectedReturn.call(addressWKlWwj, addressW21KLSZ, uintbOomlMO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressG0MqeA9 = accounts[2]
		const ControllerQX82zV6 = await Controller.new(addressG0MqeA9, {from: accounts[3]});
		const addressnZTvZnA = accounts[4]
		const addressr16B8ck = accounts[4]
		const addressdtWBLZp = accounts[5]
		const addressxQJg7hw = "0x0000000000000000000000000000000000000001"
		const addressKcsQGfK = await ControllerQX82zV6.inCaseStrategyTokenGetStuck.call(addressr16B8ck, addressnZTvZnA, {from: accounts[2]});
		const addressBbCh60V = await ControllerQX82zV6.setStrategy.call(addressxQJg7hw, addressdtWBLZp, {from: accounts[3]});

		await expect(ControllerQX82zV6.inCaseStrategyTokenGetStuck.call(addressr16B8ck, addressnZTvZnA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressCEgd8YU = accounts[4]
		const ControllerXIzhhq = await Controller.new(addressCEgd8YU, {from: accounts[2]});
		const addressl7aBmtT = accounts[3]
		const addresshL74HXT = accounts[0]
		const addressgO1Mkn = accounts[4]
		const addressfNyaiAA = accounts[0]
		const uintREHIdX = await ControllerXIzhhq.balanceOf.call(addressl7aBmtT, {from: accounts[0]});
		const addressAoeEMPN = await ControllerXIzhhq.setStrategy.call(addressgO1Mkn, addresshL74HXT, {from: accounts[3]});
		const uintpmUbvWJ = await ControllerXIzhhq.balanceOf.call(addressfNyaiAA, {from: accounts[4]});

		await expect(ControllerXIzhhq.balanceOf.call(addressl7aBmtT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBwWFcTn = accounts[2]
		const ControllerAEhcLG = await Controller.new(addressBwWFcTn, {from: accounts[0]});
		const addressGCcT2GT = accounts[2]
		const addressjdbNbzp = accounts[3]
		const addressCjuvZxl = await ControllerAEhcLG.approveStrategy.call(addressjdbNbzp, addressGCcT2GT, {from: accounts[5]});

		await expect(ControllerAEhcLG.approveStrategy.call(addressjdbNbzp, addressGCcT2GT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressze8ddSS = accounts[2]
		const ControllerQX82zV6 = await Controller.new(addressze8ddSS, {from: accounts[3]});
		const addresseyjsUA2 = accounts[2]
		const addressxe0AKA4 = accounts[0]
		const addressIMuwf5m = accounts[2]
		const addressNwb997F = "0x0000000000000000000000000000000000000000"
		const addressJMCYPR = await ControllerQX82zV6.setVault.call(addressxe0AKA4, addresseyjsUA2, {from: accounts[0]});
		const addressBbCh60V = await ControllerQX82zV6.setStrategy.call(addressNwb997F, addressIMuwf5m, {from: accounts[3]});

		await expect(ControllerQX82zV6.setVault.call(addressxe0AKA4, addresseyjsUA2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRVXuXaz = accounts[3]
		const ControllerXlpamju = await Controller.new(addressRVXuXaz, {from: accounts[2]});
		const addressFgB1ZP1 = accounts[3]
		const addresseE9X48 = accounts[1]
		const addressXaE6CGW = accounts[0]
		const addressZ7MRp8B = accounts[3]
		const addressMNg87DG = accounts[4]
		const addressYMzZqVV = accounts[4]
		const addressZH8LO7N = accounts[4]
		const addressYxx8HYi = await ControllerXlpamju.setStrategist.call(addressFgB1ZP1, {from: accounts[2]});
		const addressPqtSvYW = await ControllerXlpamju.setGovernance.call(addresseE9X48, {from: accounts[4]});
		const addressVEDgFso = await ControllerXlpamju.approveStrategy.call(addressZ7MRp8B, addressXaE6CGW, {from: accounts[0]});
		const addressYayaKsi = await ControllerXlpamju.revokeStrategy.call(addressYMzZqVV, addressMNg87DG, {from: accounts[5]});
		const addressrnQPG63 = await ControllerXlpamju.setGovernance.call(addressZH8LO7N, {from: accounts[4]});

		await expect(ControllerXlpamju.setGovernance.call(addresseE9X48, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressFqOIVPP = accounts[2]
		const ControllerAEhcLG = await Controller.new(addressFqOIVPP, {from: accounts[0]});
		const addressRYmjb0a = accounts[0]
		const addresskpHEhSM = accounts[3]
		const addressWteDFLb = accounts[1]
		const uint8Me1HN = BigInt("1233")
		const addressu73tQ5y = accounts[5]
		const addressVnc1zmu = accounts[2]
		const addressiekO3U7 = accounts[3]
		const addressk1WS7Gs = await ControllerAEhcLG.setConverter.call(addressWteDFLb, addresskpHEhSM, addressRYmjb0a, {from: "0x0000000000000000000000000000000000000001"});
		const addressLs0crwJ = await ControllerAEhcLG.earn.call(addressu73tQ5y, uint8Me1HN, {from: accounts[1]});
		const addressCjuvZxl = await ControllerAEhcLG.approveStrategy.call(addressiekO3U7, addressVnc1zmu, {from: accounts[5]});

		await expect(ControllerAEhcLG.setConverter.call(addressWteDFLb, addresskpHEhSM, addressRYmjb0a, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjLiKcdL = accounts[2]
		const ControllerQX82zV6 = await Controller.new(addressjLiKcdL, {from: accounts[3]});
		const addressYhFl2n = accounts[0]
		const addressV2Z0W85 = "0x00000000000000000000000000000000000000-1"
		const addresst07BCNb = accounts[2]
		const addresspkRCnTb = accounts[4]
		const addressFHCkT1z = accounts[4]
		const addressBbCh60V = await ControllerQX82zV6.setStrategy.call(addressV2Z0W85, addressYhFl2n, {from: accounts[3]});
		const addressZhB6Dqr = await ControllerQX82zV6.approveStrategy.call(addresspkRCnTb, addresst07BCNb, {from: accounts[0]});
		const addressOpZLOri = await ControllerQX82zV6.setOneSplit.call(addressFHCkT1z, {from: accounts[2]});

		await expect(ControllerQX82zV6.setStrategy.call(addressV2Z0W85, addressYhFl2n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXHpstBk = accounts[2]
		const ControllerAEhcLG = await Controller.new(addressXHpstBk, {from: accounts[0]});
		const uintI67UI5U = BigInt("313")
		const address3WLXle = "0x0000000000000000000000000000000000000001"
		const uintZQ7ZUT = BigInt("1815")
		const addressgWzJX0y = accounts[4]
		const addressxqDZ7Y = accounts[3]
		const addressWzDRRAG = accounts[4]
		const addressAiM5G7C = await ControllerAEhcLG.withdraw.call(address3WLXle, uintI67UI5U, {from: accounts[2]});
		const addressefbMpmZ = await ControllerAEhcLG.withdraw.call(addressgWzJX0y, uintZQ7ZUT, {from: accounts[1]});
		const addressCjuvZxl = await ControllerAEhcLG.approveStrategy.call(addressWzDRRAG, addressxqDZ7Y, {from: accounts[5]});

		await expect(ControllerAEhcLG.withdraw.call(address3WLXle, uintI67UI5U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresse8bhXoe = accounts[1]
		const ControllerA1zbu9M = await Controller.new(addresse8bhXoe, {from: accounts[0]});
		const addressI0Ge095 = accounts[0]
		const addressq0nSfBV = accounts[1]
		const addressMpx9wM7 = accounts[3]
		const uintGjp1B4M = BigInt("1196")
		const addressUHz0YjZ = accounts[5]
		const addressbP8OrhG = accounts[4]
		const addressHreHdJ5 = await ControllerA1zbu9M.withdrawAll.call(addressI0Ge095, {from: accounts[0]});
		const uintOUTJztH = await ControllerA1zbu9M.balanceOf.call(addressq0nSfBV, {from: accounts[5]});
		const addresscVeCReV = await ControllerA1zbu9M.withdrawAll.call(addressMpx9wM7, {from: accounts[4]});
		const uintEnsy1Z = await ControllerA1zbu9M.setSplit.call(uintGjp1B4M, {from: accounts[2]});
		const uintwCOD62 = await ControllerA1zbu9M.balanceOf.call(addressUHz0YjZ, {from: accounts[4]});
		const addressHxs2raE = await ControllerA1zbu9M.setGovernance.call(addressbP8OrhG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerA1zbu9M.withdrawAll.call(addressI0Ge095, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressaAxXT0n = accounts[2]
		const ControllerAEhcLG = await Controller.new(addressaAxXT0n, {from: accounts[0]});
		const addressL53wUDv = accounts[3]
		const addressTugyqxU = accounts[4]
		const uintJ5AL3eW = BigInt("461")
		const addresspNGp71r = accounts[2]
		const addresshKrbpQE = accounts[3]
		const addressj75rpD = await ControllerAEhcLG.setVault.call(addressTugyqxU, addressL53wUDv, {from: accounts[0]});
		const uinthCwpvy6 = await ControllerAEhcLG.setSplit.call(uintJ5AL3eW, {from: accounts[1]});
		const addressCjuvZxl = await ControllerAEhcLG.approveStrategy.call(addresshKrbpQE, addresspNGp71r, {from: accounts[5]});

		await expect(ControllerAEhcLG.setSplit.call(uintJ5AL3eW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMritTEq = accounts[0]
		const ControllerrXTqFtb = await Controller.new(addressMritTEq, {from: accounts[0]});
		const addressm9kgu3E = accounts[3]
		const addressaemIS0d = accounts[0]
		const uintHL3AGLA = BigInt("1961")
		const addressGG0RhaA = accounts[2]
		const addressqqwdRpr = accounts[0]
		const uintZf0lo5i = BigInt("1433")
		const addressOwtzVww = accounts[5]
		const addressJViIFQJ = accounts[2]
		const addressCysUeLv = await ControllerrXTqFtb.approveStrategy.call(addressaemIS0d, addressm9kgu3E, {from: accounts[0]});
		const uintcqj5vZ4 = await ControllerrXTqFtb.getExpectedReturn.call(addressqqwdRpr, addressGG0RhaA, uintHL3AGLA, {from: accounts[2]});
		const uintXQZTLxp = await ControllerrXTqFtb.getExpectedReturn.call(addressJViIFQJ, addressOwtzVww, uintZf0lo5i, {from: accounts[4]});

		await expect(ControllerrXTqFtb.getExpectedReturn.call(addressqqwdRpr, addressGG0RhaA, uintHL3AGLA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressSCYISk3 = accounts[3]
		const ControllerXlpamju = await Controller.new(addressSCYISk3, {from: accounts[2]});
		const uint6rRQ7W = BigInt("180")
		const addresstcQevjk = accounts[1]
		const addressBOsCpd2 = accounts[0]
		const addressiepXhmr = accounts[4]
		const addressLx4q35X = await ControllerXlpamju.yearn.call(addressBOsCpd2, addresstcQevjk, uint6rRQ7W, {from: accounts[3]});
		const addressPqtSvYW = await ControllerXlpamju.setGovernance.call(addressiepXhmr, {from: accounts[4]});

		await expect(ControllerXlpamju.yearn.call(addressBOsCpd2, addresstcQevjk, uint6rRQ7W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXjJ9R3A = accounts[2]
		const ControllerQX82zV6 = await Controller.new(addressXjJ9R3A, {from: accounts[3]});
		const address1aOgQu = accounts[4]
		const address9oB3P3 = accounts[4]
		const addresszKMFW9 = accounts[3]
		const addressjW68K2 = await ControllerQX82zV6.setRewards.call(address1aOgQu, {from: accounts[4]});
		const addressFEZE3Te = await ControllerQX82zV6.revokeStrategy.call(addresszKMFW9, address9oB3P3, {from: accounts[4]});

		await expect(ControllerQX82zV6.setRewards.call(address1aOgQu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressoL19hGD = accounts[2]
		const ControllerAEhcLG = await Controller.new(addressoL19hGD, {from: accounts[0]});
		const addressAuHZznX = accounts[1]
		const addressAERLjZS = accounts[1]
		const addressKc4gPmN = accounts[0]
		const addressCte0OyP = accounts[1]
		const addresstb4gO4 = accounts[2]
		const addressarZ05v6 = accounts[2]
		const addressl6CBC3h = accounts[0]
		const uintXYM4cB = BigInt("1735")
		const addressCT2Hifp = accounts[2]
		const addressvDatrvE = accounts[4]
		const addresslnyhOHM = await ControllerAEhcLG.inCaseStrategyTokenGetStuck.call(addressAERLjZS, addressAuHZznX, {from: accounts[0]});
		const addressyN3IHl3 = await ControllerAEhcLG.revokeStrategy.call(addressCte0OyP, addressKc4gPmN, {from: "0x0000000000000000000000000000000000000001"});
		const addressAIOPGvJ = await ControllerAEhcLG.setConverter.call(addressl6CBC3h, addressarZ05v6, addresstb4gO4, {from: accounts[0]});
		const uinthCwpvy6 = await ControllerAEhcLG.setSplit.call(uintXYM4cB, {from: accounts[1]});
		const addressCjuvZxl = await ControllerAEhcLG.approveStrategy.call(addressvDatrvE, addressCT2Hifp, {from: accounts[5]});

		await expect(ControllerAEhcLG.inCaseStrategyTokenGetStuck.call(addressAERLjZS, addressAuHZznX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTyqMOM = accounts[4]
		const ControllerXIzhhq = await Controller.new(addressTyqMOM, {from: accounts[2]});
		const addressTnQSj81 = accounts[4]
		const addressN4XoUM = accounts[6]
		const addressYnWCKwz = await ControllerXIzhhq.setOneSplit.call(addressTnQSj81, {from: accounts[2]});
		const addressIkGkCSX = await ControllerXIzhhq.setOneSplit.call(addressN4XoUM, {from: accounts[4]});

		await expect(ControllerXIzhhq.setOneSplit.call(addressN4XoUM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDeGfDk6 = accounts[2]
		const ControllerQX82zV6 = await Controller.new(addressDeGfDk6, {from: accounts[3]});
		const uintDOuyDAI = BigInt("1420")
		const addressawrBm6c = accounts[0]
		const addressdkOhwNL = accounts[4]
		const addressHxPHaad = accounts[5]
		const addressqUK7kIr = accounts[3]
		const addressgIH7qL7 = await ControllerQX82zV6.yearn.call(addressdkOhwNL, addressawrBm6c, uintDOuyDAI, {from: accounts[3]});
		const addressFEZE3Te = await ControllerQX82zV6.revokeStrategy.call(addressqUK7kIr, addressHxPHaad, {from: accounts[4]});

		await expect(ControllerQX82zV6.yearn.call(addressdkOhwNL, addressawrBm6c, uintDOuyDAI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressFTQ3fmQ = accounts[2]
		const ControllerQX82zV6 = await Controller.new(addressFTQ3fmQ, {from: accounts[3]});
		const uintTCYqhKF = BigInt("1990")
		const addressHVGuIma = accounts[3]
		const addressvQNdsZO = accounts[5]
		const addressvLg01O = accounts[0]
		const addressJOof6iQ = "0x0000000000000000000000000000000000000001"
		const addressmrUfSdR = accounts[2]
		const addressMm8sG63 = await ControllerQX82zV6.inCaseTokensGetStuck.call(addressHVGuIma, uintTCYqhKF, {from: accounts[3]});
		const addressjW68K2 = await ControllerQX82zV6.setRewards.call(addressvQNdsZO, {from: accounts[4]});
		const addressFKNGxPD = await ControllerQX82zV6.setConverter.call(addressmrUfSdR, addressJOof6iQ, addressvLg01O, {from: accounts[3]});

		await expect(ControllerQX82zV6.inCaseTokensGetStuck.call(addressHVGuIma, uintTCYqhKF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKBpiLVp = accounts[2]
		const ControllerAEhcLG = await Controller.new(addressKBpiLVp, {from: accounts[0]});
		const uintl8i4iZ2 = BigInt("1892")
		const uintkf9AZuA = BigInt("313")
		const addressnAy2C43 = "0x0000000000000000000000000000000000000000"
		const uintxUFAwWp = await ControllerAEhcLG.setSplit.call(uintl8i4iZ2, {from: accounts[0]});
		const addressAiM5G7C = await ControllerAEhcLG.withdraw.call(addressnAy2C43, uintkf9AZuA, {from: accounts[2]});

		await expect(ControllerAEhcLG.withdraw.call(addressnAy2C43, uintkf9AZuA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjA6TAsU = accounts[2]
		const ControllerQX82zV6 = await Controller.new(addressjA6TAsU, {from: accounts[3]});
		const addresss955ntu = accounts[0]
		const addressxK2EmnG = accounts[0]
		const addressdcphE0z = accounts[4]
		const addresskkGL4R8 = accounts[4]
		const addressBrjTmMk = accounts[4]
		const addresshyr44sV = await ControllerQX82zV6.setConverter.call(addressdcphE0z, addressxK2EmnG, addresss955ntu, {from: accounts[3]});
		const addressFEZE3Te = await ControllerQX82zV6.revokeStrategy.call(addressBrjTmMk, addresskkGL4R8, {from: accounts[4]});

		await expect(ControllerQX82zV6.revokeStrategy.call(addressBrjTmMk, addresskkGL4R8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTOLdi3b = accounts[2]
		const ControllerQX82zV6 = await Controller.new(addressTOLdi3b, {from: accounts[3]});
		const addresshdBcZj4 = accounts[0]
		const addresspGPHBDL = accounts[2]
		const addressOroXbdy = accounts[4]
		const addressZrNYteO = await ControllerQX82zV6.setRewards.call(addresshdBcZj4, {from: accounts[3]});
		const addressYr7TAu3 = await ControllerQX82zV6.withdrawAll.call(addresspGPHBDL, {from: accounts[2]});
		const addressjW68K2 = await ControllerQX82zV6.setRewards.call(addressOroXbdy, {from: accounts[4]});

		await expect(ControllerQX82zV6.withdrawAll.call(addresspGPHBDL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnSzoNZ0 = accounts[3]
		const ControllerXlpamju = await Controller.new(addressnSzoNZ0, {from: accounts[2]});
		const addressuajJnf = accounts[3]
		const addressSR3WvXI = accounts[0]
		const addresstdEXRHg = accounts[4]
		const addressPNvdyt7 = await ControllerXlpamju.revokeStrategy.call(addressSR3WvXI, addressuajJnf, {from: accounts[2]});
		const addressPqtSvYW = await ControllerXlpamju.setGovernance.call(addresstdEXRHg, {from: accounts[4]});

		await expect(ControllerXlpamju.setGovernance.call(addresstdEXRHg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskxp0qta = accounts[3]
		const ControllerXlpamju = await Controller.new(addresskxp0qta, {from: accounts[2]});
		const addressCNaIV9S = accounts[0]
		const addressVjHy5GS = accounts[2]
		const addressbrd8Xm = accounts[2]
		const addressUBsJH2T = accounts[4]
		const addresswha1KAd = await ControllerXlpamju.setGovernance.call(addressCNaIV9S, {from: accounts[2]});
		const addressXVNsRJ8 = await ControllerXlpamju.inCaseStrategyTokenGetStuck.call(addressbrd8Xm, addressVjHy5GS, {from: accounts[4]});
		const addressPqtSvYW = await ControllerXlpamju.setGovernance.call(addressUBsJH2T, {from: accounts[4]});

		await expect(ControllerXlpamju.inCaseStrategyTokenGetStuck.call(addressbrd8Xm, addressVjHy5GS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})