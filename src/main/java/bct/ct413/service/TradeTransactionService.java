package bct.ct413.service;

import java.util.List;

import bct.ct413.model.StockOwned;
import bct.ct413.model.Trade;

public interface TradeTransactionService {

	StockOwned calculateNewAvgPurchPrice(List<Integer> transactionIDs, Trade trade);

}
